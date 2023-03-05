const ews = require("ews-javascript-api");
const service = new ews.ExchangeService();
service.Url = new ews.Uri("https://activesync.alumni.ubc.ca/ews/exchange.asmx");
service.Credentials = new ews.ExchangeCredentials("CWL.stu", "password");

const view = new ews.ItemView(10);
const folder = new ews.FolderId(ews.WellKnownFolderName.Inbox);

// const searchFilter = new ews.SearchFilter.IsGreaterThan(
//   ews.ItemSchema.DateTimeReceived,
//   new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
// );

service
  .FindItems(folder, view)
  .then((results) => {
    results.Items.forEach((email) => {
      console.log(`Subject: ${email.Subject}`);
      console.log(`From: ${email.From.Name} <${email.From.Address}>`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
