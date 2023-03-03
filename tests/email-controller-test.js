const { service, auth } = require("../src/config/email-config");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: service,
  auth: {
    user: auth.user,
    pass: auth.pass,
  },
});

const message = {
  from: "kylematthewdy0104@gmail.com",
  to: "kylematthewdy0104@gmail.com",
  subject: "Test email from nodemailer",
  text: "Hello, this is a test email sent from nodemailer!",
};

transporter.sendMail(message, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
