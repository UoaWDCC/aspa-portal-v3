export default function (usersService) {
  let operations = {
    GET
  };

  async function GET(req, res, next) {
    res.json(await usersService.getAllEventsByUserId(req.params.id));
  }

  GET.apiDoc = `
      summary: 'Returns all events a user has registered for, past and future.'
      operationId: 'getAllEventsForUser'
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
          description: 'A list of event objects that the user has a corresponding ticket for, past and future.'
          schema:
            type: 'array'
            items:
              $ref: '#/definitions/Event'
      `;

  return operations;
}