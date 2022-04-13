require("dotenv").config();

const mailchimp = require("@mailchimp/mailchimp_transactional")(
  process.env.MANDRIL_API_KEY
);

const message = {
  from_email: "info@10sprint.com",
  subject: "Hello Jawad",
  text: "Welcome to Mailchimp Transactional. Have a good day!",
  to: [
    {
      email: "info@10sprint.com",
      type: "to",
    },
  ],
};

async function run() {
  const response = await mailchimp.messages.send({
    message,
  });
  console.log(response);
}
run();
