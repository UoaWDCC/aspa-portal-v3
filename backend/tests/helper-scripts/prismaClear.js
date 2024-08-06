import { PrismaClient } from "@prisma/client";


/**
 * NOT A TEST FILE/CASE
 * This script is used to clear the database of any dummy data, 
 * while still keeping the schema/tables around.
 * Use when you want to clear the database state:
 * run `node ./backend/tests/helper-scripts/prismaClear.js`
 */
const prisma = new PrismaClient();

// The order of clearing tables is important! (due to foreign key constraints)
async function clearDatabase() {
  await prisma.ticket.deleteMany();
  await prisma.event.deleteMany();
  await prisma.user.deleteMany();
  await prisma.exec.deleteMany();
}

clearDatabase()
  .then(async () => {
    console.log('Database cleared successfully!');
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(`Error clearing data: ${err}`);
    await prisma.$disconnect();
    process.exit(1);
  })