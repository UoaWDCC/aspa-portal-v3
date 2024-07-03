export default function (usersService) {
  let operations = {
    GET, PUT, DELETE, PATCH
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

  // TODO: BROKEN, wait for implementation of deleting tickets in ticketsService.js for implementing
  async function DELETE(req, res, next) {
    await usersService.deleteUserById(req.params.id);
    res.status(204).json({ message: "Successfully deleted!" });
  }

  // TODO: PROTECT THIS ROUTE
  async function PATCH(req, res, next) {
    if (!req.body.role) {
      res.status(400).end();
    }
    const user = await usersService.updateUserRole(req.params.id, req.body.role);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found." });
    }
  }

  GET.apiDoc = `
      summary: 'Returns a specific user, given their userID.'
      operationId: 'getUserById'
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
              role:
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
          description: 'Error: Bad Request (likely missing required fields)'
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

  PATCH.apiDoc = `
      summary: 'Updates a specific user role, given their userID.'
      operationId: 'updateUserRoleById'
      parameters:
        - name: id
          in: path
          description: 'The ID of the user'
          required: true
          type: integer
        - in: 'body'
          name: 'role'
          description: 'Object representing the new role of the user. "role" should either be "user" or "admin".'
          required: true
          schema:
            type: 'object'
            properties:
              role:
                type: 'string'
                enum: ['user', 'admin']
      responses:
        200:
          description: 'User role successfully updated.'
          schema:
            $ref: '#/definitions/User'
        400:
          description: 'Error: Bad Request (likely entered a non-valid role or nothing at all)'
        404:
          description: 'Error: User not found in the database.'
          schema:
            type: 'object'
            properties:
              message:
                type: string
                default: 'User not found.'
  `;

  DELETE.apiDoc = `
      summary: 'Deletes a specific user, given their userID.'
      operationId: 'deleteUserById'
      parameters:
        - name: id
          in: path
          description: 'The ID of the user'
          required: true
          type: integer
      responses:
        204:
          description: 'User successfully deleted.'
      `;

  return operations;
}