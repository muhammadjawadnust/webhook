const { validateEmitMandrilEvents } = require("./socket");

const case1 = {
  eventType: null,
  msg_state: "deliverd",
};
const case2 = {
  eventType: "open",
  msg_state: null,
};
const case3 = {
  eventType: "email",
  msg_state: "diliverd",
};

test("should return event state not provided if is not passed into the function ", () => {
  expect(validateEmitMandrilEvents(case1)).toBe(false);
});
test("should return event state not provided if is not passed into the function ", () => {
  expect(validateEmitMandrilEvents(case2)).toBe(false);
});
test("should return event state not provided if is not passed into the function ", () => {
  expect(validateEmitMandrilEvents(case3)).toBe(true);
});
