import express from 'express';
import { initialize } from 'express-openapi';
import swaggerUi from 'swagger-ui-express';
import yamljs from 'yamljs';

import usersService from './api/services/usersService.js';

// port and host for db
const PORT = 3007; // Port number
const HOST = "127.0.0.1"; // IP address


// initialise openapi with express, serving api docs at '/api-docs-json' as json :(


const app = express();
// listen to the db
app.listen(PORT, HOST);
const apiDoc = yamljs.load('./api/api-doc.yml');
initialize({
  app,
  apiDoc: apiDoc,
  dependencies: {
    usersService: usersService,
  },
  paths: './api/paths',
  docsPath: '/api-docs-json',
});

// serve api docs with a pretty ui using swagger-ui :)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, {
  swaggerOptions: {
    url: '/api-docs-json',
  },
}));

app.listen(3000, () => {
  console.log('Server running, API docs available at http://localhost:3000/api-docs');
});
