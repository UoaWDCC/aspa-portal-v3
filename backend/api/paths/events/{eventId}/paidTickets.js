export default function (eventsService) {
  let operations = {
    GET,
  };

  async function GET(req, res, next) {
    res.json(await eventsService.getAllPaidEventTickets());
  }

  GET.apiDoc = `
      summary: 'Returns all paid event tickets.'
      operationId: 'getAllPaidEventTickets'
      parameters:
      - in: path
        name: eventId
        description: 'The ID of the event'
        required: true
        type: integer
      responses:
        200:
          description: 'All paid tickets to the event.'
          schema:
            type: 'array' 
            items:
              $ref: '#/definitions/Ticket'
        204:    
          description: 'No tickets found in event.'       
      `;

  return operations;
}
