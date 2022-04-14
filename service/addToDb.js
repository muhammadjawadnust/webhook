const insertEventIntoDb = (mandrilEvents, connection) => {
  const { eventType, messageId, msg_state, subject, email } = mandrilEvents;

  var sql = `INSERT INTO socketEvent (event_type, message_Id,msg_state,subject,email) VALUES ('${eventType}', '${messageId}', '${msg_state}','${subject}','${email}');`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
};
module.exports = {
  insertEventIntoDb,
};
