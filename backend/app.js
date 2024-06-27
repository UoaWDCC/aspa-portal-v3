import express from 'express';
import { initialize } from 'express-openapi';
import swaggerUi from 'swagger-ui-express';
import yamljs from 'yamljs';

import usersService from './api/services/usersService.js';
import eventsService from './api/services/eventsService.js';


// initialise openapi with express, serving api docs at '/api-docs-json' as json :(
const app = express();
const apiDoc = yamljs.load('./api/api-doc.yml');
initialize({
  app,
  apiDoc: apiDoc,
  dependencies: {
    usersService: usersService,
    eventsService: eventsService
  },
  paths: './api/paths',
  docsPath: '/api-docs-json',
});

// convert from json and serve api docs with a pretty ui using swagger-ui :)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, {
  swaggerOptions: {
    url: '/api-docs-json',
  },
}));

app.listen(3000, () => {
  console.log('Server running, API docs available at http://localhost:3000/api-docs');
});
