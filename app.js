var express = require("express");
require("dotenv").config();
const knexConfig = require("./db/knexfile");
const knex = require("knex")(knexConfig[process.env.NODE_ENV]);
const PORT = process.env.PORT || 5001;

const { connection, destroyConnection } = require("./connection/index.js");

var app = express();
const bodyParser = require("body-parser");
const { EmitValue } = require("./service/socket.js");
const { insertEventIntoDb } = require("./service/addToDb.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(PORT, (err) => {
  if (err) {
    console.log("An error has been occured while starting the server", err);
  }
  console.log("Server started on port", PORT);
});

const io = require("socket.io")(server);

const socket_conn = io.on("connection", (socket) => {
  socket.emit("message", "Waiting for triggers to get triggered");
  console.log(socket.id);
  console.log("connection established");
  module.exports.socket = socket;
});

//This endpoint must be of type POST as recomended by Mandril
app.post("/", (req, res) => {
  if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
    return res.json({
      message: "empty ",
    });
  } else {
    const response = JSON.parse(req.body.mandrill_events)
      ? JSON.parse(req.body.mandrill_events)
      : "";

    if (response.length == 0) {
      return res.json({
        message: "empty event",
      });
    }
    for (let i = 0; i < response.length; i++) {
      const mandrilEvents = {
        eventType: response[i]?.event ? response[i].event : null,
        messageId: response[i]?.msg._id ? response[i].msg._id : null,
        msg_state: response[i]?.msg.state ? response[i].msg.state : null,
        subject: response[i]?.msg.subject ? response[i].msg.subject : null,
        email: response[i]?.msg.email ? response[i].msg.email : null,
      };
      EmitValue(socket_conn, mandrilEvents);
      insertEventIntoDb(mandrilEvents, connection);
    }
    res
      .json({
        message: "Events saved",
      })
      .status(200);
  }
  res
    .json({
      message: "Webhook is triggerd",
    })
    .status(200);
});

app.get("/live", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
module.exports.socket_conn = socket_conn;
