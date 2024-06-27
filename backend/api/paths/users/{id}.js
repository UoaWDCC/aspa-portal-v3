export default function (usersService) {
  let operations = {
    GET, PUT, DELETE
  };

  // TODO: Add error handling for if user not found
  async function GET(req, res, next) {
    res.json(await usersService.getUserById(req.params.id));
  }

  // Add error handling for if user not found or malformed data
  async function PUT(req, res, next) {
    res.json(await usersService.updateUser(req.params.id, req.body));
  }

  async function DELETE(req, res, next) {
    usersService.deleteUserById(req.params.id);
    res.status(204).json({ message: "Successfully deleted!" });
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
          description: 'User not found in the database.'
          schema:
            type: 'object'
            properties:
              message:
                type: string
      `;

  return operations;
}