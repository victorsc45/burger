// Set up MySQL connection.
const mysql = require("mysql");
const dotenv = require("dotenv").config();
//process environment encapsulated for privacy
//sql connection creation
let connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    // port local is 3306
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "burgers_db"

  });
};
// Make connection.
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
//exports connection for the server and orm creation
module.exports = connection;