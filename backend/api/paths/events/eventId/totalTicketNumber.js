export default function (eventsService) {
    let operations = {
      GET
    };
  
    async function GET(req, res, next) {
      res.json(await usersService.getNumberOfEventTickets());
    }
  
    GET.apiDoc = `
        summary: 'Returns the total number of tickets for an event.'
        operationId: 'getEventById'
        parameters: []
        responses:
          200:
            description: 'The first and last names of all users in the database in an array.'
            schema:
              type: 'array'
              items:
                type: 'string'
        `;
  
    return operations;
  }