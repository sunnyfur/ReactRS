import express from 'express';
import { createServer as createViteServer } from 'vite';

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  const scripts = './src/entry-client.tsx';
  const style = './src/index.css';
  app.use('*', async (req, res) => {
    const { render } = await vite.ssrLoadModule('./src/entry-server.tsx');

    const { pipe } = await render(req.originalUrl, style, {
      onShellReady() {
        pipe(res);
      },
      onShellError() {
        res.statusCode = 500;
        res.send('<!doctype html><p>Error on server</p>');
      },
      onError(err) {
        console.error(err);
      },
      bootstrapModules: [scripts],
    });
  });

  app.listen(5173);
}

console.log(`listening on http://localhost:5173`);
createServer();
