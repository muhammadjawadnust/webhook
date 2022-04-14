const insertEventIntoDb = (mandrilEvents, connection) => {
  if (validateMandrilEvents(mandrilEvents) == true) {
    const { eventType, messageId, msg_state, subject, email } = mandrilEvents;

    connection.query(
      `INSERT INTO socketEvent (event_type, message_Id,msg_state,subject,email) VALUES (?,?,?,?,?);`,
      [eventType, messageId, msg_state, subject, email],
      function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      }
    );
  }
  return false;
};

const validateMandrilEvents = (mandrilEvents) => {
  if (mandrilEvents.eventType == "" || mandrilEvents.eventType == null) {
    return false;
  }
  if (mandrilEvents.messageId == "" || mandrilEvents.messageId == null) {
    return false;
  }
  if (mandrilEvents.msg_state == "" || mandrilEvents.msg_state == null) {
    return false;
  }
  if (mandrilEvents.subject == "" || mandrilEvents.subject == null) {
    return false;
  }
  if (mandrilEvents.email == "" || mandrilEvents.email == null) {
    return false;
  }

  return true;
};
module.exports = {
  insertEventIntoDb,
  validateMandrilEvents,
};
