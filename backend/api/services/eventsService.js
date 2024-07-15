import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const eventsService = {
  async getAllEvents() {
    const events = await prisma.event.findMany();
    return events;
  },

};

export default eventsService;