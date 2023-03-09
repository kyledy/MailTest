/**
 * This is the main entry point for the application.
 */
const configure = require("./src/config/user-config");
// const getMessages = require("./src/services/server-service");
const MAX_MESSAGES = 50; // default buffer for how many messages to load on startup
// const LOGGED_IN = true;

/**
 * This function will be called by the frontend program when the user logs into the app.
 */
function onLogin(status, username, password) {
  if (status) {
    configure({ user: username, pass: password });
    // getMessages(MAX_MESSAGES, "");
  }
}
