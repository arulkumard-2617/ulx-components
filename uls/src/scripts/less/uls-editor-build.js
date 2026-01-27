#!/usr/bin/env node

const { resolve, dirname } = require('path')
const { readFileSync, writeFileSync, mkdirSync, existsSync, watch } = require('fs')
const less = require('less')

// Configuration
const stylesPath = 'src/styles/uls'
const entryFile = resolve(process.cwd(), stylesPath, 'uls-editor.less')
const outDir = resolve(process.cwd(), 'dist/css')
const outFile = resolve(outDir, 'uls-editor.css')
const outMinFile = resolve(outDir, 'uls-editor.min.css')

// Command line arguments
const isWatchMode = process.argv.includes('--watch') || process.argv.includes('-w')

// Load ULS config if available
// Script lives at uls/src/scripts/less/ → need ../../../ to reach uls/uls.config.cjs
let ulsConfig = {}
try {
  const configPathFromScript = resolve(__dirname, '../../../uls.config.cjs')
  const configPathFromCwd = resolve(process.cwd(), 'uls.config.cjs')
  const configPath = existsSync(configPathFromScript)
    ? configPathFromScript
    : existsSync(configPathFromCwd)
      ? configPathFromCwd
      : null
  if (configPath) {
    ulsConfig = require(configPath)
  }
} catch (err) {
  console.warn('Could not load uls.config.cjs, using defaults')
}

// Resolve prefix from config (for LESS variable injection)
// Supports per-app: ULS_APP env → prefixes[appName] → prefix → 'uls-'
const appName = (process.env.ULS_APP || ulsConfig.defaultApp || 'editor').toString().trim()
const componentPrefix = ulsConfig.prefixes?.[appName] || ulsConfig.prefix || 'uls-'
const cssVarPrefix = ulsConfig.cssVarPrefixes?.[appName] || ulsConfig.cssVarPrefix || ulsConfig.prefix || 'uls-'

// Paths for LESS compilation (similar to vite config)
const nodeModulesPath = resolve(process.cwd(), 'node_modules')
const stylesRoot = resolve(process.cwd(), stylesPath)
const entryDir = dirname(entryFile)
const ulsPackagePath = resolve(__dirname, '../../ULS_V2.0/node_modules/uls-v2')
const ulsStylesPath = resolve(ulsPackagePath, 'src/styles')
const ulsOverridesPath = resolve(ulsStylesPath, 'uls-overrides/less/uls-primereact')
const uiPackagePath = resolve(__dirname, '../../ULS_V2.0')

async function compileCSS() {
  try {
    if (!existsSync(entryFile)) {
      console.error(`❌ Entry file not found: ${entryFile}`)
      process.exit(1)
    }

    if (!existsSync(outDir)) {
      mkdirSync(outDir, { recursive: true })
    }

    const src = readFileSync(entryFile, 'utf8')

    console.log(`🔄 Compiling ${entryFile}... (prefix: ${componentPrefix})`)

    // Compile regular CSS
    const cssResult = await less.render(src, {
      filename: entryFile,
      paths: [
        entryDir,
        stylesRoot,
        ulsStylesPath,
        ulsOverridesPath,
        nodeModulesPath,
        resolve(process.cwd(), 'node_modules'),
        resolve(uiPackagePath, 'node_modules'),
      ],
      modifyVars: {
        'uls-prefix': componentPrefix, // Inject component prefix from config (LESS will treat as string)
        'uls-css-var-prefix': cssVarPrefix, // Inject CSS variable prefix from config
      },
    })

    if (!cssResult || !cssResult.css) {
      throw new Error('LESS compilation failed: No CSS output')
    }

    writeFileSync(outFile, cssResult.css, 'utf8')
    console.log(`✅ LESS compiled → ${outFile}`)

    // Compile minified CSS
    const minResult = await less.render(src, {
      filename: entryFile,
      paths: [
        entryDir,
        stylesRoot,
        ulsStylesPath,
        ulsOverridesPath,
        nodeModulesPath,
        resolve(process.cwd(), 'node_modules'),
        resolve(uiPackagePath, 'node_modules'),
      ],
      compress: true,
      modifyVars: {
        'uls-prefix': componentPrefix, // Inject component prefix from config (LESS will treat as string)
        'uls-css-var-prefix': cssVarPrefix, // Inject CSS variable prefix from config
      },
    })

    if (!minResult || !minResult.css) {
      throw new Error('LESS minification failed: No CSS output')
    }

    writeFileSync(outMinFile, minResult.css, 'utf8')
    console.log(`✅ LESS minified → ${outMinFile}`)

    return true
  } catch (error) {
    console.error(`❌ LESS compilation failed:`, error.message)
    if (!isWatchMode) {
      process.exit(1)
    }
    return false
  }
}

async function watchFiles() {
  console.log(`👀 Watching for changes... (Ctrl+C to stop)`)

  // Watch the main entry file
  if (existsSync(entryFile)) {
    const watcher = watch(entryFile, { persistent: true }, async (eventType) => {
      if (eventType === 'change') {
        console.log(`📝 File changed: ${entryFile}`)
        await compileCSS()
        console.log(`✨ CSS updated automatically!`)
      }
    })
  }

  // Watch LESS files in styles directory
  const { glob } = require('glob')
  try {
    const lessFiles = await glob(`${stylesRoot}/**/*.less`, {
      ignore: ['node_modules/**', 'dist/**'],
      absolute: true
    })

    lessFiles.forEach(file => {
      if (existsSync(file)) {
        const watcher = watch(file, { persistent: true }, async (eventType) => {
          if (eventType === 'change') {
            console.log(`📝 File changed: ${file}`)
            await compileCSS()
            console.log(`✨ CSS updated automatically!`)
          }
        })
      }
    })

    if (lessFiles.length > 0) {
      console.log(`👀 Watching ${lessFiles.length} LESS files in ${stylesRoot}`)
    }
  } catch (err) {
    console.warn('Could not set up file watchers for LESS files')
  }

  // Watch ULS package LESS files
  try {
    if (existsSync(ulsStylesPath)) {
      const ulsLessFiles = await glob(`${ulsStylesPath}/**/*.less`, {
        ignore: ['node_modules/**', 'dist/**'],
        absolute: true
      })

      ulsLessFiles.forEach(file => {
        if (existsSync(file)) {
          const watcher = watch(file, { persistent: true }, async (eventType) => {
            if (eventType === 'change') {
              console.log(`📝 ULS file changed: ${file}`)
              await compileCSS()
              console.log(`✨ CSS updated automatically!`)
            }
          })
        }
      })

      if (ulsLessFiles.length > 0) {
        console.log(`👀 Watching ${ulsLessFiles.length} LESS files in ULS package`)
      }
    }
  } catch (err) {
    console.warn('Could not set up file watchers for ULS LESS files')
  }
}

async function main() {
  if (isWatchMode) {
    console.log(`🚀 Starting ULS Editor watch mode`)
    await compileCSS()
    await watchFiles()

    // Keep the process running
    process.on('SIGINT', () => {
      console.log('\n👋 Stopping watch mode')
      process.exit(0)
    })
  } else {
    console.log(`🚀 Building ULS Editor CSS`)
    await compileCSS()
    console.log(`🎉 Build complete!`)
  }
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
