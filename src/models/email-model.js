/**
 * This file defines the structure of email objects, such as sender, recipient, subject, and body.
 */

class Email {
  constructor(from, to, subject, text) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.date = date;
    this.body = body;
  }

  // getters and setters
  getFrom() {
    return this.from;
  }

  setFrom(from) {
    this.from = from;
  }

  getTo() {
    return this.to;
  }

  setTo(to) {
    this.to = to;
  }

  getSubject() {
    return this.subject;
  }

  setSubject(subject) {
    this.subject = subject;
  }

  getDate() {
    return this.date;
  }

  setDate(date) {
    this.date = date;
  }

  getBody() {
    return this.body;
  }

  setBody(body) {
    this.body = body;
  }

  /**
   * Creates a message object for nodemailer.
   * @returns {object} - Message to be sent
   */
  getMessage() {
    return {
      from: this.from,
      to: this.to,
      subject: this.subject,
      date: this.date,
      body: this.body,
    };
  }
}

module.exports = Email;
