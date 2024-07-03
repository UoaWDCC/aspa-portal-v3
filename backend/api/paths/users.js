export default function (usersService) {
  let operations = {
    GET, POST
  };

  async function GET(req, res, next) {
    res.json(await usersService.getAllUsers());
  }

  async function POST(req, res, next) {
    res.json(await usersService.createUser(req.body));
  }

  GET.apiDoc = `
      summary: 'Returns all user objects in the database.'
      operationId: 'getAllUsers'
      parameters: []
      responses:
        200:
          description: 'A list of user objects currently in the database.'
          schema:
            type: 'array'
            items:
              $ref: '#/definitions/User'
        204:
          description: 'No users found in the database'
      `;

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