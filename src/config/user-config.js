/**
 * This file contains configuration settings for our email account.
 */
const assert = require("assert");
const isValidEmail = require("../utils");

module.exports.auth = {
  user: "yourusername@yourdomain.com",
  pass: "yourpassword",
};

module.exports.service = "gmail";
