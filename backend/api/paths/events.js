export default function (eventsService) {
  let operations = {
    GET,
    POST,
  };

  async function GET(req, res, next) {
    const allEvents = await eventsService.getAllEvents();
    if (allEvents.length === 0) {
      res.status(204).json({ message: "No events found" });
    } else {
      res.json(allEvents);
    }
  }

  async function POST(req, res, next) {
    res.json(await eventsService.createEvent(req.body));
  }

  GET.apiDoc = `
    summary: "Returns all events."
    operationId: "getAllEvents"
    parameters: []
    responses: 
      200: 
        description: "A list of all events."
        schema: 
          type: "array"
          items: 
            $ref: "#/definitions/Event"
      204:
        description: "No events found"

  `;

  POST.apiDoc = `
      summary: 'Creates a new event.'
      operationId: 'createEvent'
      parameters:
        - in: 'body'
          name: 'body'
          description: 'Event to be created'
          required: true
          schema:
            type: 'object'
            properties:
              name:
                type: 'string'
              dateTime:
                type: 'string'
                format: 'date-time'
              venue:
                type: 'string'
              description:
                type: 'string'
              price:
                type: 'integer'
              createdBy:
                type: 'string'
              attendingExec:
                type: 'string'
            required: ['name', 'dateTime', 'venue', 'description', 'price', 'createdBy', 'attendingExec']
      responses:
        200:
          description: 'Returns the event object created in the database.'
          schema:
            $ref: '#/definitions/Event'
        400:
          description: 'Error: Bad Request (likely missing required fields)'
    `;

  return operations;
}
