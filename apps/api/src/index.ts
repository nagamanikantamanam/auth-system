import express from 'express';
import cors from 'cors';
import { envConfig } from './config/env.config';
import { test } from './test';
import { checkDBConnection } from './utils/database-utils';
import { db } from './db/db';
import { globalErrorHandler } from './middleware/error-handlers';
import { wrapErrorHandler } from './utils/wrap-async-handler';
import { corsOptions } from './config/cors.config';
import { jsonErrorHandler } from './middleware/error-handlers';
import { staticServerOptions } from './config/static-server.config';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { getProducts } from './features/product-list/v1/products-list.controller';
import productsRouter from './features/product-list/v1/products-list.routes';
const PORT = envConfig.apiPort;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(cors(corsOptions));
app.use(express.json({ limit: '1mb' }));
app.use('/static', express.static(join(__dirname, '..', 'public'), staticServerOptions));
app.get('/test', wrapErrorHandler(test));
app.use('/products',productsRouter);
const startServer = async () => {
  await checkDBConnection();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

  process.on('SIGINT', async () => {
    console.log('\nShutting down server...');
    await db.$pool.end();
    console.log('Database connection closed.');
    process.exit(0);
  });
};
startServer();
app.use(globalErrorHandler);
