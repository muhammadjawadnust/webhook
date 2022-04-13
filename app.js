var express = require("express");
require("dotenv").config();
const knexConfig = require("./db/knexfile");
const knex = require("knex")(knexConfig[process.env.NODE_ENV]);
// const { WebSocketServer } = require("ws");

const { connection } = require("./connection/index");

var app = express();
const bodyParser = require("body-parser");
const { EmitValue } = require("./service/socket.js");

console.log("process.env.NODE_ENV  is ", process.env.NODE_ENV);
console.log("wah wah", process.env);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, (err) => {
  if (err) {
    console.log("An error has been occured while starting the server", err);
  }
  console.log("Server started on port", PORT);
});

const io = require("socket.io")(server);

/*Connecting to Mysql
 ** for CURD Operations
 */
const insertEventIntoDb = (mandrilEvents) => {
  const { eventType, messageId } = mandrilEvents;
};
connection.connect(function (err) {
  if (err) {
    return console.error(
      "error occured while connecting to DB: " + err.message
    );
  }
  var sql = `INSERT INTO socketEvent (event_type, message_Id) VALUES ('${eventType}', '${messageId}');`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  console.log("Connected to the MySQL server.");
});

const socket_conn = io.on("connection", (socket) => {
  socket.emit("message", "Waiting for triggers to get triggered");
  console.log(socket.id);
  console.log("connection established");
  module.exports.socket = socket;
});

// module.exports.iio = io;

//This endpoint must be of type POST as recomended by Mandril
app.post("/", (req, res) => {
  console.log("PUBLIC URL HAS BEEN HIT");
  res.sendFile(__dirname + "/index.html");
  const response = JSON.parse(req.body.mandrill_events);

  const mandrilEvents = {
    eventType: response[0].event ? response[0].event : null,
    messageId: response[0].msg._id ? response[0].msg._id : null,
  };
  console.log("PUBLIC URL type is ", response[0].event);
  console.log("PUBLIC URL type is ", response[0].msg._id);
  EmitValue(socket_conn, mandrilEvents);
  insertEventIntoDb(mandrilEvents);
  res.json({
    message: true,
  });
});

module.exports.socket_conn = socket_conn;
