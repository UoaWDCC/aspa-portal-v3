import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const usersService = {
  async getAllUsers() {
    users = await prisma.user.findMany();
    console.log(users);
    return users;
  },
};

export default usersService;