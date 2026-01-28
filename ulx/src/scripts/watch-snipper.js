const fs = require('fs');
const path = require('path');

// Wrap everything in async IIFE
(async () => {
  const chokidar = (await import('chokidar')).default;

  const ROOT = process.cwd();

  const SRC_ROOT = path.join(
    ROOT,
    'src/demo/ulx-ember/app/components/Demo'
  );

  const DOCS_ROOT = path.join(
    ROOT,
    'src/demo/ulx-ember/app/documentation/components'
  );

  function getDestinationPath(srcFile) {
    const relative = path.relative(SRC_ROOT, srcFile);
    const { dir, name } = path.parse(relative);
    const [componentName] = dir.split(path.sep);
  
    // Convert component name to kebab-case
    const kebabName = componentName
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .toLowerCase();
    
    // Find the category folder that contains this component
    let category = null;
    const categories = ['collections', 'elements']; // Add more categories as needed
    
    for (const cat of categories) {
      const possiblePath = path.join(DOCS_ROOT, cat, kebabName);
      if (fs.existsSync(possiblePath)) {
        category = cat;
        break;
      }
    }
    
    // Default to collections if not found
    if (!category) {
      category = 'collections';
    }
    
    return path.join(
      DOCS_ROOT,
      category,
      kebabName,
      'snippets',
      `${name}.gjs.js`
    );
  }

  function syncFile(srcFile) {
    if (!srcFile.endsWith('.gjs')) return;
  
    const destFile = getDestinationPath(srcFile);
    fs.mkdirSync(path.dirname(destFile), { recursive: true });
  
    const content = fs.readFileSync(srcFile, 'utf8');
    const wrapped = `export default \`\n${content}\n\`;\n`;
  
    fs.writeFileSync(destFile, wrapped, 'utf8');
    console.log(`✓ synced ${path.relative(ROOT, srcFile)}`);
  }

  function removeFile(srcFile) {
    if (!srcFile.endsWith('.gjs')) return;

    const destFile = getDestinationPath(srcFile);
    if (fs.existsSync(destFile)) {
      fs.unlinkSync(destFile);
      console.log(`✗ removed ${path.relative(ROOT, destFile)}`);
    }
  }

  console.log('👀 Watching demo .gjs files...');

  chokidar
    .watch(SRC_ROOT, {
      ignoreInitial: false,
      awaitWriteFinish: true
    })
    .on('add', syncFile)
    .on('change', syncFile)
    .on('unlink', removeFile);
})();