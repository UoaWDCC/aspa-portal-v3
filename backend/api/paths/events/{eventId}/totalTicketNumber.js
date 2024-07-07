export default function (eventsService) {
  let operations = {
    GET,
  };

  async function GET(req, res, next) {
    res.json(await eventsService.getNumberOfEventTickets(req.params.eventId));
  }

  GET.apiDoc = `
      summary: 'Returns the total number of tickets for an event.'
      operationId: 'getNumberOfEventTickets'
      parameters:
      - in: path
        name: eventId
        description: 'The ID of the event'
        required: true
        type: integer
      responses:
        200:
          description: 'Total number of tickets.'
          schema:
            type: 'integer' 
        204:    
          description: 'No tickets found in event.'       
      `;

  return operations;
}
