//Services
const validateEmitMandrilEvents = (mandrilEvents) => {
  if (mandrilEvents.eventType == "" || mandrilEvents.eventType == null) {
    return false;
  }
  if (mandrilEvents.msg_state == "" || mandrilEvents.msg_state == null) {
    return false;
  }
  return true;
};

function EmitValue(mandrilEvents, socket_conn) {
  if (validateEmitMandrilEvents(mandrilEvents) == true) {
    const { eventType, messageId, msg_state, subject, email } = mandrilEvents;

    socket_conn.emit("Event", eventType);
    socket_conn.emit("Event", msg_state);
  }
  return false;
}

module.exports = { EmitValue, validateEmitMandrilEvents };
