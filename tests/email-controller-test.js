const { service, auth } = require("../src/config/email-config");
const { transporter } = require("../src/controllers/email-controller");
const Email = require("../src/models/email-model");

const e1 = new Email(
  "kylematthewdy0104@gmail.com",
  "kylematthewdy0104@gmail.com",
  "Sample Email 1",
  "Hi! This is a sample email.",
  ""
);

const e2 = new Email(
  "kylematthewdy0104@gmail.com",
  "kylematthewdy0104@gmail.com",
  "Sample Email 2",
  "Hi! This is a sample email.",
  ""
);

const e3 = new Email(
  "kylematthewdy0104@gmail.com",
  "kylematthewdy0104@gmail.com",
  "Sample Email 3",
  "Hi! This is a sample email.",
  ""
);
