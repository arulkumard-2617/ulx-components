'use strict';

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const projectRoot = path.resolve(__dirname, '..');
const distPath = path.join(projectRoot, 'dist');
const appsailDistPath = path.join(projectRoot, 'appsail', 'dist');
const appPath = path.join(projectRoot, 'app');

const runOnce = process.argv.includes('--once');

function copyDistToAppsail() {
  if (!fs.existsSync(distPath)) {
    return;
  }
  if (fs.existsSync(appsailDistPath)) {
    fs.rmSync(appsailDistPath, { recursive: true });
  }
  fs.cpSync(distPath, appsailDistPath, { recursive: true });
  console.log('[watch-dist] Copied dist to appsail/dist');
}

if (runOnce) {
  if (!fs.existsSync(distPath)) {
    console.warn(
      '[watch-dist] dist not found. Run "npm run build:dist" first.',
    );
    process.exit(0);
  }
  copyDistToAppsail();
  process.exit(0);
}

let debounceTimer;
function scheduleCopy() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(copyDistToAppsail, 500);
}

let buildDebounceTimer;
let buildInProgress = false;

function scheduleBuild() {
  clearTimeout(buildDebounceTimer);
  buildDebounceTimer = setTimeout(runBuild, 1500);
}

function runBuild() {
  if (buildInProgress) return;
  buildInProgress = true;
  console.log('[watch-dist] Source changed. Running ember build...');
  const child = spawn('npm', ['run', 'build:dist'], {
    cwd: projectRoot,
    stdio: 'inherit',
    shell: true,
  });
  child.on('close', (code) => {
    buildInProgress = false;
    if (code === 0) {
      copyDistToAppsail();
    }
  });
}

let watcher = null;
let sourceWatcher = null;

function startWatching() {
  if (watcher) return;
  if (!fs.existsSync(distPath)) return;
  copyDistToAppsail();
  watcher = fs.watch(distPath, { recursive: true }, (_eventType, filename) => {
    if (filename) scheduleCopy();
  });
  console.log('[watch-dist] Watching dist for changes.');
}

function startSourceWatching() {
  if (!fs.existsSync(appPath)) return;
  sourceWatcher = fs.watch(
    appPath,
    { recursive: true },
    (_eventType, filename) => {
      if (
        filename &&
        (filename.endsWith('.gjs') ||
          filename.endsWith('.hbs') ||
          filename.endsWith('.js'))
      ) {
        scheduleBuild();
      }
    },
  );
  console.log(
    '[watch-dist] Watching app source; changes will trigger build and copy to appsail.',
  );
}

startWatching();
startSourceWatching();

if (!watcher) {
  console.warn(
    '[watch-dist] dist not found. Will keep checking every 5s until dist exists. Run "npm run build:dist" to build.',
  );
  const checkInterval = setInterval(() => {
    if (fs.existsSync(distPath)) {
      clearInterval(checkInterval);
      startWatching();
    }
  }, 5000);
}
