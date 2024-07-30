export default function (eventsService) {
  let operations = {
    GET,
  };

  async function GET(req, res, next) {
    const members = await eventsService.getAllEventMembers(req.params.eventId);
    if (!members) {
      res.status(204).json({ message: "No members in event" });
    } else {
      res.json(members);
    }
  }

  GET.apiDoc = `
        summary: 'Returns all members registered to an event.'
        operationId: 'getAllEventMembers'
        parameters: 
        - in: path
          name: eventId
          description: 'The ID of the event'
          required: true
          type: integer
        responses:
          200:
            description: 'Array of user objects registered to the event'
            schema:
              type: 'array'
              items:
                $ref: '#/definitions/User'
              `;

  return operations;
}
