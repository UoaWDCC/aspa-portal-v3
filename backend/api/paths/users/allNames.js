export default function (usersService) {
  let operations = {
    GET
  };

  async function GET(req, res, next) {
    res.json(await usersService.getAllUserNames());
  }

  GET.apiDoc = `
      summary: 'Returns the first and last names of all users in the database.'
      operationId: 'getAllUserNames'
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