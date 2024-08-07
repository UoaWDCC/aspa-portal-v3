import { PrismaClient } from "@prisma/client";
import dummyUsers from "../dummy-data/dummyUsers.json" assert { type: "json" };
import dummyEvents from "../dummy-data/dummyEvents.json" assert { type: "json" };
import dummyTickets from "../dummy-data/dummyTickets.json" assert { type: "json" };
import dummyExecs from "../dummy-data/dummyExecs.json" assert { type: "json" };

/**
 * NOT A TEST FILE/CASE
 * This script is used to populate the database with dummy data.
 * Use when the database state is empty:
 * run `node ./backend/tests/helper-scripts/prismaPopulate.js`
 */
const prisma = new PrismaClient();

async function populateDatabase() {
  await prisma.event.createMany({
    data: dummyEvents,
  });

  await prisma.user.createMany({
    data: dummyUsers,
  });

  await prisma.ticket.createMany({
    data: dummyTickets,
  });

  await prisma.exec.createMany({
    data: dummyExecs,
  });
}

populateDatabase()
  .then(async () => {
    console.log("Database populated successfully!");
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(`Error adding data: ${err}`);
    await prisma.$disconnect();
    process.exit(1);
  });
