export default function (usersService) {
  let operations = {
    GET
  };

  async function GET(req, res, next) {
    res.status(200).json(await usersService.getAllUsers());
  }

  // NOTE: We could also use a YAML string here.
  GET.apiDoc = {
    summary: 'Returns all users by id.',
    operationId: 'getAllUsers',
    parameters: [],
    responses: {
      200: {
        description: 'A list of users that match the requested name.',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/User'
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