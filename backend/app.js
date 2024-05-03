import express from 'express';
import { initialize } from 'express-openapi';
import swaggerUi from 'swagger-ui-express';

import apiDoc from './api/api-doc.js';
import usersService from './api/services/usersService.js';

const app = express();
initialize({
  app,
  apiDoc: apiDoc,
  dependencies: {
    usersService: usersService
  },
  paths: './api/paths',
  docsPath: '/api-docs-json',
});

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, { swaggerUrl: '/api-docs' }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, {
  swaggerOptions: {
    url: '/api-docs-json',
  },
}));

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
  console.log('API docs available at http://localhost:3000/api-docs');
});
