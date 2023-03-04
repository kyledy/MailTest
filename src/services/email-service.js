/**
 * This file contains functions that implement the business logic for email operations, such as sending and receiving
 * emails.
 */

const { auth } = require("../config/email-config");
const user = auth.user;
const pass = auth.pass;
