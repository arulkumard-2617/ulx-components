import Express from 'express';
const app = Express();
const port = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 9000;

// Serve static files from the current directory
app.use(Express.static('dist'));

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile('dist/index.html', { root: '.' });
});

// Fallback: serve index.html for all other routes (SPA client-side routing)
app.get('*', (req, res) => {
  res.sendFile('dist/index.html', { root: '.' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://localhost:${port}/`);
});
