export default function (eventsService) {
  let operations = {
    GET,
  };

  async function GET(req, res, next) {
    const unpaidTickets = await eventsService.getAllUnpaidEventTickets(
      req.params.eventId,
    );
    if (!unpaidTickets) {
      res.status(204).json({ message: "No unpaid tickets in event" });
    } else {
      res.json(unpaidTickets);
    }
  }

  GET.apiDoc = `
      summary: 'Returns all unpaid event tickets.'
      operationId: 'getAllUnpaidEventTickets'
      parameters:
      - in: path
        name: eventId
        description: 'The ID of the event'
        required: true
        type: integer
      responses:
        200:
          description: 'All unpaid tickets to the event.'
          schema:
            type: 'array' 
            items:
              $ref: '#/definitions/Ticket'
        204:    
          description: 'No unpaid tickets found in event.'       
      `;

  return operations;
}
