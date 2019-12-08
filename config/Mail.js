// FOR MAILING

const nodemailer = require('nodemailer')
const { MAIL, SMTP_HOST, SMTP_PORT, MAIL_USERNAME, MAIL_PASSWORD } = process.env

let transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: MAIL_USERNAME,
    pass: MAIL_PASSWORD,
  },
})

/**
 * Mails to specified eMail address
 * @param {Object} options
 * @param {String} options.to
 * @param {String} options.subject
 * @param {String} options.html
 * @returns {<Promise>} Promise
 */
let mail = options =>
  new Promise((resolve, reject) => {
    let o = {
      from: `Instagram <${MAIL}>`,
      ...options,
    }

    transporter.sendMail(o, err => {
      err ? reject(err) : resolve('Mail Sent!!')
    })
  })

module.exports = mail
