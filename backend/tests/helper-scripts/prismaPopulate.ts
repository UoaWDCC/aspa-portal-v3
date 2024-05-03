import { PrismaClient } from '@prisma/client'
const dummyUsers = require('../dummy-data/dummyUsers');
const dummyEvents = require('../dummy-data/dummyEvents');
const dummyTickets = require('../dummy-data/dummyTickets');
const dummyExecs = require('../dummy-data/dummyExecs');

const prisma = new PrismaClient()

/**
 * NOT A TEST FILE/CASE
 * This script is used to populate the database with dummy data.
 * Use when the database state is empty:
 * run `node ./backend/tests/helper-scripts/prismaPopulate`
 */
async function main() {
  await prisma.event.createMany({
    data: dummyEvents
  });

  await prisma.user.createMany({
    data: dummyUsers
  });

  await prisma.ticket.createMany({
    data: dummyTickets
  });

  await prisma.exec.createMany({
    data: dummyExecs
  });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })