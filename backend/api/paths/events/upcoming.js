export default function (eventsService) {
  let operations = {
    GET,
  };

  async function GET(req, res, next) {
    const upcomingEvents = await eventsService.getAllUpcomingEvents();
    if (upcomingEvents.length === 0) {
      res.status(204).json({ message: "No upcoming events" });
    } else {
      res.json(upcomingEvents);
    }
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
