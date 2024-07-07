import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const eventsService = {
  // GET /users
  async getAllEvents() {
    const events = await prisma.event.findMany();
    return events;
  },

  async getAllPastEvents() {
    const now = new Date();
    const events = await prisma.event.findMany({
      where: {
        dateTime: {
          lt: now,
        },
      },
    });
    return events;
  },

  async getAllUpcomingEvents() {
    const now = new Date();
    const events = await prisma.event.findMany({
      where: {
        dateTime: {
          gt: now,
        },
      },
    });
    return events;
  },

  // GET /users/{id}
  async getEventById(id) {
    const event = await prisma.event.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return event;
  },

  // GET /users/totalNumber
  async getAllEventMembers(id) {
    const event = await this.getEventById(id);
    if (!event.users) {
      return 0;
    } else {
      const users = event.users;
      return users;
    }
  },

  // POST /users
  async getAllEventTickets(id) {
    const event = await this.getEventById(id);
    if (!event.tickets) {
      return 0;
    } else {
      const tickets = event.tickets;
      return tickets;
    }
  },

  async getAllUnpaidEventTickets(id) {
    const event = await this.getEventById(id);
    if (!event.tickets) {
      return 0;
    } else {
      const tickets = event.tickets;
      const unpaidTickets = tickets.filter((ticket) => !ticket.isPaid);
      return unpaidTickets;
    }
  },

  async getAllPaidEventTickets(id) {
    const event = await this.getEventById(id);
    if (!event.tickets) {
      return 0;
    } else {
      const tickets = event.tickets;
      const paidTickets = tickets.filter((ticket) => ticket.isPaid);
      return paidTickets;
    }
  },

  async getNumberOfEventTickets(id) {
    const event = await this.getEventById(id);
    if (!event.tickets) {
      return 0;
    } else {
      const tickets = event.tickets;
      return tickets.length;
    }
  },

  async createEvent(data) {
    const event = await prisma.event.create({
      data,
    });
    return event;
  },

  async updateEvent(id, data) {
    const event = await prisma.event.update({
      where: {
        id: parseInt(id),
      },
      data,
    });
    return event;
  },

  // DELETE /users/{id}
  // TODO: You cannot delete a user if they have tickets associated with them
  async deleteEventById(id) {
    await prisma.event.delete({
      where: {
        id: parseInt(id),
      },
    });
  },
};

export default eventsService;
