/**
 * This file handles HTTP requests related to email operations, such as sending emails and retrieving email metadata.
 */
const { service, auth } = require("../config/email-config");
const nodemailer = require("nodemailer");

module.exports.transporter = nodemailer.createTransport({
  service: service,
  auth: auth,
});

/** Sample message
 * const message = {
 * from: auth.user, // Temporarily sends an email to themselves
 * to: auth.user,
 * subject: "Test email from nodemailer",
 * text: "Hello, this is a test email sent from nodemailer!",
 * };
 */

/** Sample call to send an email
 * transporter.sendMail(message, (error, info) => {
 * error ? console.log(error) : console.log("Email sent: " + info.response);
 * });
 */
