import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const eventsService = {
  getAllEvents() {
    const events = prisma.event.findMany();
    return events;
  },
  
};

export default eventsService;