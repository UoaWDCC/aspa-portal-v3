export default function (eventsService) {
  let operations = {
    GET,
  };

  async function GET(req, res, next) {
    res.json(await eventsService.getAllUpcomingEvents());
  }

  GET.apiDoc = `
        summary: 'Returns all upcoming events.'
        operationId: 'getAllUpcomingEvents'
        parameters: []
        responses:
          200:
            description: 'All upcoming events from the current dateTime'
            schema:
              type: 'array'
              items:
                $ref: '#/definitions/Event'
        `;

  return operations;
}
