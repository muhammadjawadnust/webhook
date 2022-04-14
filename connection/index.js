let mysql = require("mysql");
require("dotenv").config();

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

connection.connect(function (err) {
  if (err) {
    return console.error(
      "error occured while connecting to DB: " + err.message
    );
  }
  console.log("Connected to the MySQL server.");
});

const destroyConnection = () => {
  connection.end(function (err) {
    if (err) {
      return console.log("error:" + err.message);
    }
    console.log("Close the database connection.");
    connection.destroy();
  });
};

// destroyConnection();
module.exports = { connection, destroyConnection };
