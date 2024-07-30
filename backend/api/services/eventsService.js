import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const eventsService = {
  // GET /events
  async getAllEvents() {
    const events = await prisma.event.findMany();
    return events;
  },

  // GET /events/past
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

  // GET /events/upcoming
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

  // GET /events/{eventId}
  async getEventById(id) {
    const event = await prisma.event.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return event;
  },

  // GET /events/{eventId}/members
  async getAllEventMembers(id) {
    const event = await this.getEventById(id);
    const users = event.users;
    return users;
  },

  // GET /events/{eventId}/allTickets
  async getAllEventTickets(id) {
    const event = await this.getEventById(id);
    const tickets = event.tickets;
    return tickets;
  },

  // GET /events/{eventId}/unpaidTickets
  async getAllUnpaidEventTickets(id) {
    const event = await this.getEventById(id);
    const tickets = event.tickets;
    if (tickets) {
      const unpaidTickets = tickets.filter((ticket) => !ticket.isPaid);
      return unpaidTickets;
    } else {
      return null;
    }
  },

  // GET /events/{eventId}/paidTickets
  async getAllPaidEventTickets(id) {
    const event = await this.getEventById(id);
    const tickets = event.tickets;
    if (tickets) {
      const paidTickets = tickets.filter((ticket) => ticket.isPaid);
      return paidTickets;
    } else {
      return null;
    }
  },

  // GET /events/{eventId}/totalTicketNumber
  async getNumberOfEventTickets(id) {
    const event = await this.getEventById(id);
    const tickets = event.tickets;
    return tickets.length;
  },

  // POST /events
  async createEvent(data) {
    const event = await prisma.event.create({
      data,
    });
    return event;
  },

  //PUT /events/{eventId}
  async updateEvent(id, data) {
    const event = await prisma.event.update({
      where: {
        id: parseInt(id),
      },
      data,
    });
    return event;
  },

  //DELETE /events/{eventId}
  async deleteEventById(id) {
    await prisma.event.delete({
      where: {
        id: parseInt(id),
      },
    });
  },
};

export default eventsService;
