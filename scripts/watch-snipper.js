const fs = require('fs');
const path = require('path');

// Wrap everything in async IIFE
(async () => {
  const chokidar = (await import('chokidar')).default;

  const ROOT = process.cwd();

  const SRC_ROOT = path.join(
    ROOT,
    'demo/uls-ember/app/components/demo'
  );

  const DEST_ROOT = path.join(
    ROOT,
    'demo/uls-ember/app/documentation/components/collections/'
  );

  function getDestinationPath(srcFile) {
    const relative = path.relative(SRC_ROOT, srcFile);
    const { dir, name } = path.parse(relative);
    const [componentName] = dir.split(path.sep);
  
    return path.join(
      DEST_ROOT,
      componentName,
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