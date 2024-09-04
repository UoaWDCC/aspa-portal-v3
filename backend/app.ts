import express from "express";
import swaggerUi from "swagger-ui-express";
import * as fs from "fs";
import * as path from "path";
import { url } from "inspector";

const app = express();
const host = "localhost";
const port = 3000;

// Load the OpenAPI document
const apiDocPath = path.resolve(__dirname, "../backend/docs/api_docs.json");
const apiDoc = fs.readFileSync(apiDocPath, "utf8");

const openAPIJson = JSON.parse(apiDoc);

const options = {
  customCss: ".swagger-ui .topbar { display: none }",
  customSiteTitle: "ASPA API Documentation",
  customJs: "/custom.js",
  explorer: true,
};

// Serve the OpenAPI documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openAPIJson, options));

app.listen(port, host, () => {
  console.log(
    `API documentation is running at http://localhost:${port}/api-docs`,
  );
});
