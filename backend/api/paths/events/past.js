export default function (eventsService) {
  let operations = {
    GET,
  };

  async function GET(req, res, next) {
    const pastEvents = await eventsService.getAllPastEvents();
    if (pastEvents.length === 0) {
      res.status(204).json({ message: "No past events" });
    } else {
      res.json(pastEvents);
    }
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
