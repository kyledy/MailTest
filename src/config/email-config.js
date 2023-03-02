/**
 * This file contains configuration settings for our email provider, such as SMTP credentials, port number,
 * and security options.
 */

export const host = "smtp.gmail.com";
export const port = 465;
export const secure = true;
export const auth = {
  user: "your-email@gmail.com",
  pass: "your-password",
};
