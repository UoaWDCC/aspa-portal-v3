import { PrismaClient } from "@prisma/client";

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
    return userNames.map((user) => `${user.firstName} ${user.lastName}`);
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
  },

  // GET /users/{id}/allEvents
  async getAllEventsByUserId(id) {
    const userTickets = await this.getAllTicketsByUserId(id);
    const eventIds = userTickets.map((ticket) => ticket.eventId);
    const events = await prisma.event.findMany({
      where: {
        id: {
          in: eventIds,
        },
      },
    });
    return events;
  },

  // GET /users/{id}/upcomingEvents
  async getUpcomingEventsByUserId(id) {
    const userTickets = await this.getAllTicketsByUserId(id);
    const eventIds = userTickets.map((ticket) => ticket.eventId);
    const events = await prisma.event.findMany({
      where: {
        id: {
          in: eventIds,
        },
        dateTime: {
          gte: new Date(),
        },
      },
    });
    return events;
  },

  // GET /users/{id}/pastEvents
  async getPastEventsByUserId(id) {
    const userTickets = await this.getAllTicketsByUserId(id);
    const eventIds = userTickets.map((ticket) => ticket.eventId);
    const events = await prisma.event.findMany({
      where: {
        id: {
          in: eventIds,
        },
        dateTime: {
          lt: new Date(),
        },
      },
    });
    return events;
  },

  // GET /users/{id}/allTickets
  async getAllTicketsByUserId(id) {
    const tickets = await prisma.ticket.findMany({
      where: {
        userId: parseInt(id),
      },
    });
    return tickets;
  },

  // GET /users/{id}/unpaidTickets
  async getUnpaidTicketsByUserId(id) {
    const tickets = await prisma.ticket.findMany({
      where: {
        userId: parseInt(id),
        isPaid: false,
      },
    });
    return tickets;
  },

  // GET /users/{id}/paidTickets
  async getPaidTicketsByUserId(id) {
    const tickets = await prisma.ticket.findMany({
      where: {
        userId: parseInt(id),
        isPaid: true,
      },
    });
    return tickets;
  },
};

export default usersService;
