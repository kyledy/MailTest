const ews = require("ews-javascript-api");
const exchangeService = new ews.ExchangeService(
  ews.ExchangeVersion.Exchange2013
);

// Set the URL of the Exchange server and the credentials to use for authentication
exchangeService.Url = new ews.Uri(
  "https://activesync.alumni.ubc.ca/ews/exchange.asmx"
);
exchangeService.Credentials = new ews.ExchangeCredentials(
  "kyledy.stu",
  "Kdy@0104++"
);

// Define a search filter to retrieve only the most recent email
const filter = new ews.SearchFilter.IsGreaterThanOrEqualTo(
  ews.ItemSchema.DateTimeReceived,
  new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
);

// Define a property set to retrieve only the subject and body of the email
const propertySet = new ews.PropertySet(
  ews.BasePropertySet.FirstClassProperties
);
propertySet.Add(ews.ItemSchema.Subject);
propertySet.Add(ews.ItemSchema.Body);

// Use the ItemView object to retrieve only the most recent email
const itemView = new ews.ItemView(1);

// Use the FindItems method to retrieve the most recent email that matches the filter
exchangeService
  .FindItems(
    ews.WellKnownFolderName.Inbox,
    filter,
    itemView
    // itemView,
    // propertySet
  )
  .then((results) => {
    // Get the first email from the results and print its subject and body
    if (results.Items.length > 0) {
      const email = results.Items[0];
      console.log(`Subject: ${email.Subject}`);
      console.log(`Body: ${email.Body.Text}`);
    } else {
      console.log("No emails found.");
    }
  })
  .catch((error) => {
    console.log(`Error retrieving emails: ${error}`);
  });
