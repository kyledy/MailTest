/**
 * This file contains configuration settings for our email provider.
 */

module.exports.service = "smtp"; // will most likely change to Exchange ActiveSync (used by UBC mail)
module.exports.auth = {
  user: "your-username@gmail.com",
  pass: "your-password@gmail.com",
};
