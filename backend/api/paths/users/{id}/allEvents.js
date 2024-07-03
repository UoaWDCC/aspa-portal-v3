export default function (usersService) {
  let operations = {
    GET
  };

  // TODO: wait for implementation of functions in eventsService.js
  async function GET(req, res, next) {
    res.status(404).json({ message: 'Not implemented' });
  }

  GET.apiDoc = `
      summary: 'Returns all events a user has registered for, past and future.'
      operationId: 'getAllEventsForUser'
      parameters:
        - name: id
          in: path
          description: 'The ID of the user'
          required: true
          type: integer
      responses:
        200:
          description: 'A list of event objects that the user has registered for, past and future.'
          schema:
            type: 'array'
            items:
              $ref: '#/definitions/Event'
      `;

  return operations;
}