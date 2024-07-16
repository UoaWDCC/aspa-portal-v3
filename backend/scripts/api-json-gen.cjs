const OpenAPIFramework = require("openapi-framework");
const fs = require('fs');

// import services
async function setupFramework() {
    const eventsService = await import('../api/services/eventsService.js');
    const usersService = await import('../api/services/usersService.js');
    
    framework = new OpenAPIFramework.default({
        featureType: 'middleware',
        name: "express-openapi",
        apiDoc: '../api/api-doc.yml',
        paths: "../api/paths",
        dependencies: {
            usersService: usersService,
            eventsService: eventsService,
        },
    });
}

async function generateApiDoc() {
    await setupFramework();
    await framework.initialize({});
    // Output OpenAPI definition
    console.log(JSON.stringify(framework.apiDoc));
}

async function saveApiDoc() {
    // create docs folder if it doesn't exist
    if (!fs.existsSync('../docs')) {
        fs.mkdirSync('../docs');
    }

    await setupFramework();
    await framework.initialize({});
    // Save OpenAPI definition to a file
    fs.writeFileSync('../docs/api-doc.json', JSON.stringify(framework.apiDoc));
}

// Call the function
saveApiDoc();