export default function (eventsService) {
    let operations = {
      DELETE, PUT, GET
    };

    
    async function GET(req, res, next) {
      res.json(await usersService.getEventById());
    }
  
    GET.apiDoc = `
        summary: 'Returns the event given id.'
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


    async function DELETE(req, res, next) {
        await eventsService.deleteEventById(req.params.id);
        res.status(204).json({ message: "Successfully deleted!" });
      }

      async function PUT(req, res, next) {
        try {
          const updatedEvent = await eventsService.updateEvent(req.params.id, req.body);
          res.json(updatedEvent);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while updating the event' });
        }
      }
  
    DELETE.apiDoc = `
        summary: 'Deletes the event from the database.'
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

        PUT.apiDoc = `
      summary: 'Updates the event in the database.'
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
  
    return operations;
  }