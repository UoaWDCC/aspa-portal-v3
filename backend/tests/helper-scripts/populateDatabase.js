const mysql = require('mysql');
const dummyUsers = require('../dummy-data/dummyUsers');
const dummyEvents = require('../dummy-data/dummyEvents');
const dummyTickets = require('../dummy-data/dummyTickets');
const dummyExecs = require('../dummy-data/dummyExecs');

/**
 * NOT A TEST FILE/CASE
 * This script is used to populate the database with dummy data.
 * Use when the database state is empty:
 * run `node ./backend/tests/helper-scripts/populateDatabase.js`
 */

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'aspadb',
  port: 3307,
});

// connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// insert user dummy data into the database (dummyUsers.json)
const userSql = `INSERT INTO User (id, email, firstName, lastName, university, studentId, upi, role, skillLevel, phoneNumber) VALUES ?`;
connection.query(userSql,
  [dummyUsers.map(user => {
    return [user.id,
    user.email,
    user.firstName,
    user.lastName,
    user.university,
    user.studentId,
    user.upi,
    user.role,
    user.skillLevel,
    user.phoneNumber];
  }
  )],
  (err) => {
    if (err) {
      console.error('Error inserting users:', err);
      return;
    }
    console.log('Dummy users inserted successfully');
  }
);

// insert event dummy data into the database (dummyEvents.json)
const eventSql = `INSERT INTO Event (id, name, dateTime, venue, description, price, createdBy, attendingExec) VALUES ?`;
connection.query(eventSql, [dummyEvents.map(event => {
  return [event.id,
  event.name,
  event.dateTime,
  event.venue,
  event.description,
  event.price,
  event.createdBy,
  event.attendingExec];
}
)],
  (err, result) => {
    if (err) {
      console.error('Error inserting events:', err);
      return;
    }
    console.log('Dummy events inserted successfully');
  }
);

// insert ticket dummy data into the database (dummyTickets.json)
const ticketSql = `INSERT INTO Ticket (id, userId, eventId, isPaid, paymentDateTime, paymentMethod, paymentAmount) VALUES ?`;
connection.query(ticketSql, [dummyTickets.map(ticket => {
  return [ticket.id,
  ticket.userId,
  ticket.eventId,
  ticket.isPaid,
  ticket.paymentDateTime,
  ticket.paymentMethod,
  ticket.paymentAmount];
}
)], (err, result) => {
  if (err) {
    console.error('Error inserting tickets:', err);
    return;
  }
  console.log('Dummy tickets inserted successfully');
});

// insert exec dummy data into the database (dummyExecs.json)
const execSql = `INSERT INTO Exec (id, name, title, description, imageUrl) VALUES ?`;
connection.query(execSql, [dummyExecs.map(exec => {
  return [exec.id,
  exec.name,
  exec.title,
  exec.description,
  exec.imageUrl];
}
)], (err, result) => {
  if (err) {
    console.error('Error inserting execs:', err);
    return;
  }
  console.log('Dummy execs inserted successfully');
});

connection.end();