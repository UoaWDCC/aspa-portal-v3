export default function (eventsService) {
  let operations = {
    GET,
  };

  async function GET(req, res, next) {
    const allTickets = await eventsService.getAllEventTickets(
      req.params.eventId,
    );
    if (!allTickets) {
      res.status(204).json({ message: "No tickets in event" });
    } else {
      res.json(allTickets);
    }
  }

  GET.apiDoc = `
      summary: 'Returns all event tickets.'
      operationId: 'getAllEventTickets'
      parameters:
      - in: path
        name: eventId
        description: 'The ID of the event'
        required: true
        type: integer
      responses:
        200:
          description: 'All tickets registered to a specific event.'
          schema:
            type: 'array' 
            items:
              $ref: '#/definitions/Ticket'
        204:    
          description: 'No tickets found in event.'       
      `;

  return operations;
}
