const { google } = require("googleapis");
const { authenticate } = require("@google-cloud/local-auth");
const path = require("path");

async function main() {
  const auth = await authenticate({
    keyfilePath: path.join(
      "c:\\Users\\User\\Documents\\GitHub\\MailTest\\src\\config",
      "client_secret.json"
    ),
    scopes: ["https://www.googleapis.com/auth/gmail.readonly"],
  });

  const gmail = google.gmail({ version: "v1", auth });

  const res = await gmail.users.messages.list({
    userId: "me",
    maxResults: 5,
    q: "", // returns all results
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

main().catch(console.error);
