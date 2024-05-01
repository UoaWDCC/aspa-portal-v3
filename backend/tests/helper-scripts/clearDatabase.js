const mysql = require('mysql');

/**
 * NOT A TEST FILE/CASE
 * This script is used to clear the database of any dummy data, while still keeping the schema/tables around.
 * Use when you want to clear the database state:
 * run `node ./backend/tests/helper-scripts/clearDatabase.js`
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

// wipe tables
connection.query('DELETE FROM User', (err) => {
  if (err) {
    console.error('Error deleting users:', err);
    return;
  }
  console.log('Users deleted successfully');
});

connection.query('DELETE FROM Event', (err) => {
  if (err) {
    console.error('Error deleting events:', err);
    return;
  }
  console.log('Events deleted successfully');
});

connection.query('DELETE FROM Ticket', (err) => {
  if (err) {
    console.error('Error deleting tickets:', err);
    return;
  }
  console.log('Tickets deleted successfully');
});

connection.query('DELETE FROM Exec', (err) => {
  if (err) {
    console.error('Error deleting execs:', err);
    return;
  }
  console.log('Execs deleted successfully');
});

connection.end();