export default function (usersService) {
  let operations = {
    GET,
  };

  async function GET(req, res, next) {
    res.json(await usersService.getPastEventsByUserId(req.params.id));
  }

  GET.apiDoc = `
      summary: 'Returns events a user has registered for in the past.'
      operationId: 'getPastEventsForUser'
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
          description: 'A list of event objects (representing a PAST event) that the user has a corresponding ticket for.'
          schema:
            type: 'array'
            items:
              $ref: '#/definitions/Event'
      `;

  return operations;
}
