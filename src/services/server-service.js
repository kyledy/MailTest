/**
 * This file contains functions that implement the business logic for email operations, such as receiving emails, parsing their content, and filtering them.
 */

const { google } = require("googleapis");
const { authenticate } = require("@google-cloud/local-auth");
const path = require("path");

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

  for (const message of messages) {
    const msg = await gmail.users.messages.get({
      userId: "me",
      id: message.id,
      format: "full",
    });

    console.log(
      "From:",
      msg.data.payload.headers.find((header) => header.name === "From").value
    );
    console.log(
      "To:",
      msg.data.payload.headers.find((header) => header.name === "To").value
    );
    console.log(
      "Subject:",
      msg.data.payload.headers.find((header) => header.name === "Subject").value
    );
    console.log(
      "Date:",
      msg.data.payload.headers.find((header) => header.name === "Date").value
    );
    console.log("Body:", msg.data.snippet);
    console.log("---");
  }
}
