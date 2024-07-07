export default function (eventsService) {
  let operations = {
    GET,
  };

  async function GET(req, res, next) {
    res.json(await eventsService.getAllPastEvents());
  }

  GET.apiDoc = `
        summary: 'Returns all past events.'
        operationId: 'getAllPastEvents'
        parameters: []
        responses:
          200:
            description: 'All past events from the current dateTime.'
            schema:
              type: 'array'
              items:
                $ref: '#/definitions/Event'
              `;

  return operations;
}
