var express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 5001;

var app = express();
const bodyParser = require("body-parser");
const { EmitValue } = require("./service/socket.js");
const { insertEventIntoDb } = require("./service/addToDb.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const server = app.listen(PORT, (err) => {
//   if (err) {
//     console.log("An error has been occured while starting the server", err);
//   }
//   console.log("Server started on port", PORT);
// });

//This endpoint must be of type POST as recomended by Mandril
app.post("/", async (req, res) => {
  if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
    return res.json({
      message: "send some events in body",
    });
  } else {
    const response = JSON.parse(req.body.mandrill_events)
      ? JSON.parse(req.body.mandrill_events)
      : "";

    if (response.length == 0 || response == undefined) {
      return res.json({
        message: "empty event",
      });
    }
    for (let i = 0; i < response.length; i++) {
      response
        ? () => {
            const mandrilEvents = {
              eventType: response[i]?.event ? response[i].event : null,
              messageId: response[i]?.msg._id ? response[i].msg._id : null,
              msg_state: response[i]?.msg.state ? response[i].msg.state : null,
              subject: response[i]?.msg.subject
                ? response[i].msg.subject
                : null,
              email: response[i]?.msg.email ? response[i].msg.email : null,
            };
          }
        : () => {
            return 0;
          };
      //Commenting Below code for testing
      //EmitValue(socket_conn, mandrilEvents);
      //tesing below code for tesing
      //insertEventIntoDb(mandrilEvents, connection);
    }
    res
      .json({
        message: "Events saved",
      })
      .status(200);
  }
});

app.get("/test", (req, res) => {
  res.sendStatus(200);
});

module.exports = app;
