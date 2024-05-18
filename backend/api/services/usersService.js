import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const usersService = {
  async getAllUsers() {
    const users = await prisma.user.findMany();
    return users;
  },
  
};

export default usersService;