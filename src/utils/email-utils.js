/**
 * This file contains utility functions related to email operations, such as formatting email addresses,
 * parsing email content, and validating email addresses.
 */

function isValidEmail(email) {
  // Regular expression for validating email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regular expression
  return emailRegex.test(email);
}

module.exports = isValidEmail;
