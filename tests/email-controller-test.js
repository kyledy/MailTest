import { service, auth } from "./email-config.mjs";
import { transporter, sendMessage } from "./email-controller.mjs";
import Email from "./email-model.mjs";

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

console.log(e1.getMessage());
console.log(e2.getMessage());
console.log(e3.getMessage());

// sendMessage(e1.getMessage());
// sendMessage(e2.getMessage());
// sendMessage(e3.getMessage());
