let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "admin",
  password: "admin123",
  database: "db",
  port: 3030,
});

connection.connect(function (err) {
  if (err) {
    return console.error(
      "error occured while connecting to DB: " + err.message
    );
  }
  /*TODO
   ** We should look for the dependency injectio too
   */
  var sql = `INSERT INTO socketEvent2 (event_type_know, message_ID_event) VALUES ('jawad', 'testing');`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
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
module.exports = [connection, destroyConnection];
