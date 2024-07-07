export default function (eventsService) {
  let operations = {
    GET,
  };

  async function GET(req, res, next) {
    res.json(await eventsService.getAllUnpaidEventTickets());
  }

  GET.apiDoc = `
      summary: 'Returns all unpaid event tickets.'
      operationId: 'getAllPaidEventTickets'
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
          description: 'No tickets found in event.'       
      `;

  return operations;
}
