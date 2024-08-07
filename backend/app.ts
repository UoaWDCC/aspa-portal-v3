import express from 'express';
import swaggerUi from 'swagger-ui-express';
import * as fs from 'fs';
import * as path from 'path';

const app = express();
const port = 3000;

// Load the OpenAPI document
const apiDocPath = path.resolve(__dirname, '../backend/docs/api_docs.json');
const apiDoc = fs.readFileSync(apiDocPath, 'utf8');

// Serve the OpenAPI documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(JSON.parse(apiDoc)));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});