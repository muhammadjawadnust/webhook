const { validateMandrilEvents } = require("./addToDb.js");

const case1 = {
  eventType: null,
  messageId: "12334",
  msg_state: "deliverd",
  subject: "notification",
  email: "jawad@gamil.com",
};
const case2 = {
  eventType: "open",
  messageId: null,
  msg_state: "deliverd",
  subject: "notification",
  email: "jawad@gamil.com",
};
const case3 = {
  eventType: "open",
  messageId: "12334",
  msg_state: null,
  subject: "notification",
  email: "jawad@gamil.com",
};

const case4 = {
  eventType: "open",
  messageId: "12334",
  msg_state: "deliverd",
  subject: null,
  email: "jawad@gamil.com",
};

const case5 = {
  eventType: "open",
  messageId: "12334",
  msg_state: "deliverd",
  subject: "notification",
  email: null,
};
const case6 = {
  eventType: "open",
  messageId: "12334",
  msg_state: "deliverd",
  subject: "notification",
  email: "jawad@gamil.com",
};
describe("validate the mandril events", () => {
  test("should return event state not provided if is not passed into the function ", () => {
    expect(validateMandrilEvents(case1)).toBe(false);
  });
  test("should return event state not provided if is not passed into the function ", () => {
    expect(validateMandrilEvents(case2)).toBe(false);
  });
  test("should return event state not provided if is not passed into the function ", () => {
    expect(validateMandrilEvents(case3)).toBe(false);
  });

  test("should return event state not provided if is not passed into the function ", () => {
    expect(validateMandrilEvents(case4)).toBe(false);
  });

  test("should return event state not provided if is not passed into the function ", () => {
    expect(validateMandrilEvents(case5)).toBe(false);
  });
  test("should return event state not provided if is not passed into the function ", () => {
    expect(validateMandrilEvents(case6)).toBe(true);
  });
});
