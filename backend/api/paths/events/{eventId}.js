export default function (eventsService) {
  let operations = {
    DELETE,
    PUT,
    GET,
  };

  async function GET(req, res, next) {
    try {
      const event = await eventsService.getEventById(req.params.eventId);
      if (!event) {
        res.status(404).json({ message: "Event not found" });
      } else {
        res.json(event);
      }
    } catch (error) {
      next(error);
    }
  }

  async function DELETE(req, res, next) {
    const event = await eventsService.getEventById(req.params.eventId);
    if (!event) {
      res.status(404).json({ message: "Event not found!" });
    } else {
      await eventsService.deleteEventById(req.params.eventId);
      res.status(204).json({ message: "Successfully deleted!" });
    }
  }

  async function PUT(req, res, next) {
    try {
      const updatedEvent = await eventsService.updateEvent(
        req.params.eventId,
        req.body
      );
      res.json(updatedEvent);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while updating the event" });
    }
  }

  GET.apiDoc = `
  summary: 'Returns the event given id.'
  operationId: 'getEventById'
  parameters:
  - in: path
    name: eventId
    description: 'The ID of the event'
    required: true
    type: integer
  responses:
    200:
      description: 'Returns event object.'
      schema:
        $ref: '#/definitions/Event'

  `;

  DELETE.apiDoc = `
        summary: 'Deletes the event from the database.'
        operationId: 'deleteEventById'
        parameters:
        - in: path
          name: eventId
          description: 'The ID of the event'
          required: true
          type: integer
        responses:
          204:
            description: 'Successfully deleted'
            schema:
              type: 'array'
              items:
                type: 'string'
          404:
            description: 'Event not found awdawd'
        `;

  PUT.apiDoc = `
      summary: 'Updates the event in the database.'
      operationId: 'updateEvent'
      parameters:
      - in: path
        name: eventId
        description: 'The ID of the event'
        required: true
        type: integer
      - in: 'body'
        name: 'body'
        description: 'Event details to be editted'
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
          description: 'event successfully updated.'
          schema:
            $ref: '#/definitions/Event'
  `;

  return operations;
}
