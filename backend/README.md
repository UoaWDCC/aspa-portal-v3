# Backend - ASPA

> Last updated 05-2023. 

> *Highly recommended* to use `ctrl + shift + v` to display this markdown file nicely in VS Code, if using it. 

Let's describe some of the tools you need to contribute to the backend!

### Docker Compose

We're using a MySQL database running in a local Docker container for development.
To create this database on your machine, (assuming you have followed the steps in Getting Started wiki page of downloading WSL2 and Docker Desktop, ) all you have to do is run `docker compose up` in the backend directory, i.e. 

```
C:\Projects\aspa-portal-v3\backend>docker compose up
```

This starts a "backend" container in Docker which holds a MySQL database.

### Prisma Migrate

Once you have your MySQL database running, you want to make sure it has the correct "structure" to hold your data. How we do this is by running `npx prisma migrate dev` , i.e.

```
C:\Projects\aspa-portal-v3\backend>npx prisma migrate dev
```

This enforces the current `schema.prisma` file found in the `backend/prisma` directory on the database and generates the project's Prisma Client, which is used to interact with the database in our code.

### Prisma Studio

Prisma Studio is a tool you can use to display the current database state. This is done by running `npx prisma studio` , i.e.

```
C:\Projects\aspa-portal-v3\backend>npx prisma studio
```

This should open the browser and show a page with options to see each table in the database.

### Data population scripts (subject to change)

If you've been following this in order, your database might be empty. That's why there are some scripts you can run to populate and delete all the data in your database:

```
// Populate database (use forward slashes if using BASH)
C:\Projects\aspa-portal-v3\backend>node .\tests\helper-scripts\prismaPopulate.js

// Delete all rows from tables
C:\Projects\aspa-portal-v3\backend>node .\tests\helper-scripts\prismaClear.js
```

You can verify the results of these scripts using Prisma Studio.

### OpenAPI

The backend is built in express, but we're not creating just a normal express app. We're using [*express-openapi*](https://www.npmjs.com/package/express-openapi) to build our express app. Long story short, you're gonna have to create all your endpoints in the `backend/api/paths` folder and actually write documentation to accompany it (read the Architecture GitHub wiki page for more info). An example endpoint is shown below, from `backend/api/users.js` :

```
// note that the route is defined by the file path and name, i.e., this endpoint is for the /users route.

// to use services (for things like communicating with the database), pass it as a parameter into this function
export default function (usersService) {

  let operations = {
    GET
  };

  // this is the GET /users endpoint
  async function GET(req, res, next) {
    res.status(200).json(await usersService.getAllUsers());
  }

  // you can define more endpoints for this route here e.g. POST /users, then add it to operations above

  // this is documentation you have to define for your endpoints
  GET.apiDoc = {
    summary: 'Returns all users by id.',
    operationId: 'getAllUsers',
    parameters: [],
    responses: {
      200: {
        description: 'A list of users that match the requested name.',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/User'
          }
        }
      },
      default: {
        description: 'An error occurred',
        schema: {
          additionalProperties: true
        }
      }
    }
  };

  return operations;
}
```

In `backend/app.js` :

```
// this is the important part
initialize({
  app,
  apiDoc: apiDoc,

  // make sure to specify any services you use here
  dependencies: {
    usersService: usersService,
  },

  // this takes the endpoints we define, and add them to our app
  paths: './api/paths',
  docsPath: '/api-docs-json',
});
```

### Swagger UI

Time to reap the results of our hard work - run `npm run dev` or `yarn run dev` to start up a page that takes our endpoints and displays it to us in an interactive way where we can run them at the click of a button.

```
C:\Projects\aspa-portal-v3\backend>yarn run dev
```

You can use this to check whether you've implemented your endpoint correctly. Also, since the script uses nodemon, you don't have to rerun `npm run dev` every time you update/implement your endpoint - the page should update every time you save :)

### Yarn

Just one last small thing - we're using Yarn as our package manager. That means if you really want to add a package, you should use `yarn add <package>` not `npm install` . If it's devDependency, make sure you run it with the `-D` flag, i.e., `yarn add -D <package` . You can still use npm to run scripts though if you want e.g. `npm run dev` .
