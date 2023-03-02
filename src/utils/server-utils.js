/**
 * This file contains utility functions related to server operations, such as logging events, handling errors, and
 * parsing request headers.
 */

function validateEmailRequest(req) {
  const { to, subject, text } = req.body;

  if (!to || !subject || !text) {
    return {
      valid: false,
      message: "Missing required email parameter",
    };
  }

  return {
    valid: true,
    message: "",
  };
}

export default {
  validateEmailRequest,
};
