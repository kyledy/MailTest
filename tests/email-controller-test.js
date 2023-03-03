const { service, auth } = require("../src/config/email-config");
// const { transporter } = require("../src/controllers/email-controller");
const Email = require("../src/models/email-model");
const nodemailer = require("nodemailer");

const transporter1 = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kylematthewdy0104@gmail.com",
    pass: "eprpybwxogliioch",
  },
});

const message = {
  from: "kylematthewdy0104@gmail.com",
  to: "kylematthewdy0104@gmail.com",
  subject: "Test email from nodemailer",
  text: "Hello, this is a test email sent from nodemailer!",
};

transporter1.sendMail(message, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
