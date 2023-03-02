/**
 * This file contains utility functions related to email operations, such as formatting email addresses,
 * parsing email content, and validating email addresses.
 */

import { createTransport } from "nodemailer";
import {
  smtpHost,
  smtpPort,
  smtpSecure,
  smtpUser,
  smtpPass,
  fromEmail,
} from "./email-config";

async function sendEmail(to, subject, text) {
  const transporter = createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const info = await transporter.sendMail({
    from: fromEmail,
    to,
    subject,
    text,
  });

  console.log(`Email sent: ${info.messageId}`);
}

export default {
  sendEmail,
};
