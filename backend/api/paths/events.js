export default function (eventsService) {
    let operations = {
      GET
    };
  
    async function GET(req, res, next) {
      res.status(200).json(await eventsService.getAllEvents());
    }
  
    // NOTE: We could also use a YAML string here.
    GET.apiDoc = {
      summary: 'Retuns all events.',
      operationId: 'getAllEvents',
      parameters: [],
      responses: {
        200: {
          description: 'A list of events that match the requested name.',
          schema: {
            type: 'array',
            items: {
              $ref: '#/definitions/Event'
            }
          }
        },
        default: {
          description: 'An error occurred',
          schema: {
            additionalProperties: true
          }
        }
      }
    };
  
    return operations;
  }