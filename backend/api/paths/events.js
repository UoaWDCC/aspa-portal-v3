export default function (eventsService) {
    let operations = {
      GET, POST
    };
  
    async function GET(req, res, next) {
      res.status(200).json(await eventsService.getAllEvents());
    }

    async function POST(req, res, next) {
      res.json(await eventsService.createEvent(req.body));
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

    POST.apiDoc = `
      summary: 'Creates a new user object in the database.'
      operationId: 'createUser'
      parameters:
        - in: 'body'
          name: 'body'
          description: 'User object to be created (university, studentId, and upi optional)'
          required: true
          schema:
            type: 'object'
            properties:
              email:
                type: 'string'
              firstName:
                type: 'string'
              lastName:
                type: 'string'
              university:
                type: 'string'
              studentId:
                type: 'integer'
              upi:
                type: 'string'
              role:
                type: 'string'
              skillLevel:
                type: 'string'
              phoneNumber:
                type: 'string'
            required: ['email', 'firstName', 'lastName', 'role', 'skillLevel', 'phoneNumber']
      responses:
        200:
          description: 'Returns the user object created in the database.'
          schema:
            $ref: '#/definitions/User'
        400:
          description: 'Error: Bad Request (likely missing required fields)'
    `
  
    return operations;
  }