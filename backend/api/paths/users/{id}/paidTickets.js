export default function (usersService) {
  let operations = {
    GET
  };

  async function GET(req, res, next) {
    res.json(await usersService.getPaidTicketsByUserId(req.params.id));
  }

  GET.apiDoc = `
      summary: 'Returns paid tickets a user has from registering for events.'
      operationId: 'getPaidTicketsForUser'
      parameters:
        - name: id
          in: path
          description: 'The ID of the user'
          required: true
          type: integer
      responses:
        200:
          description: 'A list of ticket objects that have been paid for that the user has from registering for events.'
          schema:
            type: 'array'
            items:
              $ref: '#/definitions/Ticket'
      `;

  return operations;
}