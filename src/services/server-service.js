/**
 * This file contains functions that implement the business logic for email operations, such as receiving emails, parsing their content, and filtering them.
 */

const { google } = require("googleapis");
const { authenticate } = require("@google-cloud/local-auth");
const path = require("path");
const { parseMessage } = require("../utils");

/**
 * This function retrieves a specified number of emails from the user's Gmail account that match the specified filter criteria.
 * @param {number} no_to_fetch - The number of emails to fetch
 * @param {query} query - The specified filter criteria. See Gmail API documentation for more details.
 * @returns {Promise<Object[]>} Logs the list of emails that match the specified filter criteria.
 * Always include a '.catch(error => console.error(error))' when calling this function.
 */
async function getMessages(no_to_fetch, query) {
  const auth = await authenticate({
    keyfilePath: path.join(
      "c:\\Users\\User\\Documents\\GitHub\\MailTest\\src\\config", // uses absolute path for now, but can be refactored to relative path
      "client_secret.json"
    ),
    scopes: ["https://www.googleapis.com/auth/gmail.readonly"],
  });

  const gmail = google.gmail({ version: "v1", auth });

  const res = await gmail.users.messages.list({
    userId: "me",
    maxResults: no_to_fetch, // change this number to return more results
    q: query, // change this query to filter your search
  });

  const messages = res.data.messages;
  let retrievedMessages = []; // to store the email objects retrieved by the function call

  for (const message of messages) {
    const msg = await gmail.users.messages.get({
      userId: "me",
      id: message.id,
      format: "full",
    });

    next_message = {
      from: msg.data.payload.headers.find((header) => header.name === "From")
        .value,
      to: msg.data.payload.headers.find((header) => header.name === "To").value,
      subject: msg.data.payload.headers.find(
        (header) => header.name === "Subject"
      ).value,
      date: msg.data.payload.headers.find((header) => header.name === "Date")
        .value,
      body: msg.data.snippet,
    };

    retrievedMessages.push(next_message);
  }
  processMessages(retrievedMessages);
}
module.exports = getMessages;

/**
 * This function takes the list of retrieved messages and parses their content according to the specified criteria.
 *
 * @param {Object[object]} messages - the list of retrieved messages
 * @returns {Object[object]} the list of parsed messages
 */
function processMessages(messages) {
  return messages.map((message) => parseMessage(message));
}
