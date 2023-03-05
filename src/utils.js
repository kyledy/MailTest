/**
 * This file contains utility functions, such as formatting email addresses,
 * parsing email content, and validating email addresses.
 */

const Email = require("./models/email-model");
const assert = require("assert");

/**
 * Returns true if the given email address is valid.
 *
 * @param {string} email_address
 * @returns {boolean} Whether the given email address is valid
 */
function isValidEmail(email_address) {
  // Regular expression for validating email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regular expression
  return emailRegex.test(email_address);
}
module.exports = isValidEmail;

/**
 * This function takes a message and converts it to an Email object if it is valid.
 * @param {object} message - A message received from the server
 * @error - If the message is null
 * @returns {Email} Returns the message as an instance of Email
 */
function parseMessage(message) {
  if (message) {
    assert.ok(isValidEmail(message.from), "Invalid email address received.");
    assert.ok(isValidEmail(message.to), "Invalid email address received.");
    return new Email(
      message.from,
      message.to,
      message.subject,
      message.date,
      message.body
    );
  } else {
    console.error("The value of the message was null.");
  }
}
module.exports = parseMessage;
