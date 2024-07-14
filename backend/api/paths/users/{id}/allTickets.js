export default function (usersService) {
  let operations = {
    GET
  };

  async function GET(req, res, next) {
    res.json(await usersService.getAllTicketsByUserId(req.params.id));
  }

  GET.apiDoc = `
      summary: 'Returns all tickets a user has from registering for events.'
      operationId: 'getAllTicketsForUser'
      tags:
        - Users
      parameters:
        - name: id
          in: path
          description: 'The ID of the user'
          required: true
          type: integer
      responses:
        200:
          description: 'A list of all ticket objects that the user has from registering for events.'
          schema:
            type: 'array'
            items:
              $ref: '#/definitions/Ticket'
      `;

  return operations;
}