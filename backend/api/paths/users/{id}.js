export default function (usersService) {
  let operations = {
    GET, PUT
  };

  async function GET(req, res, next) {
    const user = await usersService.getUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found." });
    }
  }

  async function PUT(req, res, next) {
    if (req.body.role) {
      res.status(401).json({ message: "Cannot update user role using this endpoint." });
    }
    try {
      const user = await usersService.updateUser(req.params.id, req.body);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found." });
      }
    } catch (error) {
      res.status(400).json({ message: "Bad Request." });
    }
  }

  GET.apiDoc = `
      summary: 'Returns a specific user, given their userID.'
      operationId: 'getUserById'
      tags:
        - Users
      parameters:
        - name: id
          in: path
          description: 'The ID of the user'
          required: true
          type: integer
      responses:
        200:
          description: 'The user object found in the database with the given ID.'
          schema:
            $ref: '#/definitions/User'
        404:
          description: 'Error: User not found in the database.'
          schema:
            type: 'object'
            properties:
              message:
                type: string
                default: 'User not found.'
      `;

  PUT.apiDoc = `
      summary: 'Updates a specific user, given their userID.'
      operationId: 'updateUserById'
      tags:
        - Users
      parameters:
        - name: id
          in: path
          description: 'The ID of the user'
          required: true
          type: integer
        - in: 'body'
          name: 'body'
          description: 'User object to be updated'
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
              skillLevel:
                type: 'string'
              phoneNumber:
                type: 'string'
      responses:
        200:
          description: 'User successfully updated.'
          schema:
            $ref: '#/definitions/User'
        400:
          description: 'Error: Bad Request (likely wrongly formatted fields or missing required fields)'
          schema:
            type: 'object'
            properties:
              message:
                type: string
                default: 'Bad Request.'
        401:
          description: 'Unauthorized: Cannot update user role using this endpoint.'
          schema:
            type: 'object'
            properties:
              message:
                type: string
                default: 'Cannot update user role using this endpoint.'
        404:
          description: 'Error: User not found in the database.'
          schema:
            type: 'object'
            properties:
              message:
                type: string
                default: 'User not found.'
      `

  return operations;
}