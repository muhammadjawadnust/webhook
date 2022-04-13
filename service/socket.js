function EmitValue(socket_conn, mandrilEvents) {
  console.log("socket_conn is", socket_conn);
  const { eventType, messageId } = mandrilEvents;
  setTimeout(() => {
    socket_conn.emit("Event", eventType);
  });
}
module.exports.EmitValue = EmitValue;
