//Services
function EmitValue(socket_conn, mandrilEvents) {
  const { eventType, messageId, msg_state, subject, email } = mandrilEvents;

  socket_conn.emit("Event", eventType);
  socket_conn.emit("Event", msg_state);
}
module.exports.EmitValue = EmitValue;
