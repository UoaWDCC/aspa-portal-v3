export default function (usersService) {
  let operations = {
    GET
  };

  async function GET(req, res, next) {
    res.json(await usersService.getTotalNumberOfUsers());
  }

  GET.apiDoc = `
      summary: 'Returns the total number of users as an integer.'
      operationId: 'getTotalNumberOfUsers'
      tags:
        - Users
      parameters: []
      responses:
        200:
          description: 'The number of users found in the database.'
          schema:
            type: 'integer'
      `;

  return operations;
}