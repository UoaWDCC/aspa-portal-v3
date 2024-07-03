import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const usersService = {
  // GET /users
  async getAllUsers() {
    const users = await prisma.user.findMany();
    return users;
  },

  // GET /users/{id}
  async getUserById(id) {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return user;
  },

  // GET /users/allNames
  async getAllUserNames() {
    const userNames = await this.getAllUsers();
    return userNames.map(user => `${user.firstName} ${user.lastName}`);
  },

  // GET /users/totalNumber
  async getTotalNumberOfUsers() {
    const users = await this.getAllUsers();
    return users.length;
  },

  // POST /users
  async createUser(data) {
    const user = await prisma.user.create({
      data,
    });
    return user;
  },

  // PUT /users/{id}
  async updateUser(id, data) {
    const user = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data,
    });
    return user;
  }
};

export default usersService;