/**
 * This file contains configuration settings for our email account.
 */
const isValidEmail = require("../utils");

// configuration settings for the user account.
module.exports.auth = {
  user: "yourusername@yourdomain.com",
  pass: "yourpassword",
};
module.exports.service = "gmail";

/**
 * Changes the system-set login credentials for the user on log in.
 * @param {Object} config - Credentials for the currently logged in user.
 */
function configure(config) {
  if (isValidEmail(config.user)) {
    auth = config;
  }
}
module.exports = configure;
