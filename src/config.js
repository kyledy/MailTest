/**
 * This file contains configuration settings for our email account.
 */
const assert = require("assert");
const isValidEmail = require("./utils");

module.exports.auth = {
  user: "your-username@gmail.com",
  pass: "your-password@gmail.com",
};

/**
 *  Include this whenever we want to check if the user's address is valid
 *  assert.ok(isValidEmail(auth.user), 'This is an invalid email address');
 */
