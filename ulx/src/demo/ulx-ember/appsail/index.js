import Express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = Express();
const port = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 9000;

// Always resolve dist next to this file — do not use process.cwd() (Catalyst / PM2
// may start the process from another directory, which breaks /assets/* and causes
// SPA fallback to send index.html as JS/CSS → MIME errors + SRI failures).
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');

app.use(Express.static(distPath));

// SPA fallback: Ember client-side routes only. Never send index.html for /assets/*
// (missing assets should 404, not return HTML with the wrong Content-Type).
app.get('*', (req, res) => {
  if (req.path.startsWith('/assets/')) {
    res.status(404).type('text/plain').send('Asset not found');
    return;
  }
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://localhost:${port}/`);
});
