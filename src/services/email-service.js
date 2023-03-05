/**
 * This file contains functions that implement the business logic for email operations, such as sending and receiving
 * emails.
 */

const Email = require("../models/email-model.js");
const nodemailer = require("nodemailer");
const { auth } = require("../config/email-config");
const transporter = nodemailer.createTransport({
  service: "email-service", // change this when we can securely connect to the server
  auth: {
    user: auth.user,
    pass: auth.pass,
  },
});

/**
 * Sends the email based on the specified criteria, or prints an error message if the email doesn't go through.
 * @param {Email} email - The message to send
 * @returns {void}
 */
function sendEmail(email) {
  const message = email.getMessage();
  transporter.sendMail(message, (error, info) => {
    error ? console.log(error) : console.log("Email sent: " + info.response);
  });
}
module.exports = sendEmail;
