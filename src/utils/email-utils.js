/**
 * This file contains utility functions related to email operations, such as formatting email addresses,
 * parsing email content, and validating email addresses.
 */

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
