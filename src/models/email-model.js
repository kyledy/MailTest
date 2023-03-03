/**
 * This file defines the structure of email objects, such as sender, recipient, subject, and body.
 */

class Email {
  constructor(from, to, subject, text, html) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.text = text;
    this.html = html;
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

  getText() {
    return this.text;
  }

  setText(text) {
    this.text = text;
  }

  getHtml() {
    return this.html;
  }

  setHtml(html) {
    this.html = html;
  }

  /**
   * Creates a message object for nodemailer
   */
  getMessage() {
    return {
      from: this.from,
      to: this.to,
      subject: this.subject,
      text: this.text,
      html: this.html,
    };
  }
}

module.exports = Email;
