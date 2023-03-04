const Email = require("../src/models/email-model");
const isValidEmail = require("../src/utils/email-utils");

/**
 * Testing whether or not the function correctly identifies an invalid email address.
 */
let e1 = new Email("kyledy", "", "", "");
console.log(`${e1.getFrom()} : ${isValidEmail(e1.getFrom())}`);

/**
 * Testing whether or not the function correctly identifies a valid email address.
 */
let e2 = new Email("kyledy@gmail.com", "", "", "");
console.log(`${e2.getFrom()} : ${isValidEmail(e2.getFrom())}`);

/**
 * Testing whether or not the function correctly identifies correct email addresses with typos.
 */
let e3 = new Email("kyledy@gmail..com", "", "", "");
console.log(`${e3.getFrom()} : ${isValidEmail(e3.getFrom())}`);

e3.setFrom("kyledy@@gmail.com");
console.log(`${e3.getFrom()} : ${isValidEmail(e3.getFrom())}`);

e3.setFrom("kyledy@@gmail.com.");
console.log(`${e3.getFrom()} : ${isValidEmail(e3.getFrom())}`);

e3.setFrom("kyledy.@gmail.com");
console.log(`${e3.getFrom()} : ${isValidEmail(e3.getFrom())}`);
