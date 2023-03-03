/**
 * This file handles HTTP requests related to email operations, such as sending emails and retrieving email metadata.
 */
const { service, auth } = require("../config/email-config");
const nodemailer = require("nodemailer");
