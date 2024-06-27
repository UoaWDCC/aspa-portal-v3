export default function (usersService) {
  let operations = {
    GET
  };

  async function GET(req, res, next) {
    // res.json(await usersService.getAllUserNames());
    res.status(404).json({ message: 'Not implemented' });
  }

  // TODO: parameter for apidoc
  GET.apiDoc = `
      summary: 'Returns all events a user has registered for, past and future.'
      operationId: 'getAllEventsForUser'
      parameters: []
      responses:
        200:
          description: 'The first and last names of all users in the database in an array.'
          schema:
            type: 'array'
            items:
              type: 'string'
      `;

  return operations;
}