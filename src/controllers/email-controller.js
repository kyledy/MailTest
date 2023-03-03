/**
 * This file handles HTTP requests related to email operations, such as sending emails and retrieving email metadata.
 */
const { service, auth } = require("../config/email-config");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kylematthewdy0104@gmail.com",
    pass: "eprpybwxogliioch",
  },
});

const message = {
  from: "kylematthewdy0104@gmail.com",
  to: "kylematthewdy0104@gmail.com",
  subject: "Test Email from Node.js",
  text: "This is a test email sent from a Node.js application using nodemailer.",
};

transporter.sendMail(message, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
