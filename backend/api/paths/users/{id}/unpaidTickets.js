export default function (usersService) {
  let operations = {
    GET
  };

  async function GET(req, res, next) {
    res.json(await usersService.getUnpaidTicketsByUserId(req.params.id));
  }

  GET.apiDoc = `
      summary: 'Returns unpaid tickets a user has from registering for events.'
      operationId: 'getUnpaidTicketsForUser'
      parameters:
        - name: id
          in: path
          description: 'The ID of the user'
          required: true
          type: integer
      responses:
        200:
          description: 'A list of ticket objects that have not been paid for that the user has from registering for events.'
          schema:
            type: 'array'
            items:
              $ref: '#/definitions/Ticket'
      `;

  return operations;
}