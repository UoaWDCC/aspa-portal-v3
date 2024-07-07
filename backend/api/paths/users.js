export default function (usersService) {
  let operations = {
    GET, POST
  };

  async function GET(req, res, next) {
    res.json(await usersService.getAllUsers());
  }

  async function POST(req, res, next) {
    if (req.body.role === 'admin') {
      res.status(401).json({ message: "Cannot create admin users." });
    }
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
      summary: 'Creates a new user object in the database (admin creation not allowed).'
      operationId: 'createUser'
      parameters:
        - in: 'body'
          name: 'body'
          description: 'User object to be created (university, studentId, and upi optional)'
          required: true
          schema:
            $ref: '#/definitions/User'
      responses:
        200:
          description: 'Returns the user object created in the database.'
          schema:
            $ref: '#/definitions/User'
        400:
          description: 'Error: Bad Request (likely wrongly formatted fields or missing required fields)'
        401:
          description: 'Error: Cannot create admin users.'
          schema:
            type: 'object'
            properties:
              message:
                type: string
                default: 'Cannot create admin users.'
    `

  return operations;
}