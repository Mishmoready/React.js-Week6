const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  auth: {
    user: process.env.EMAIL, // accessing the EMAIL environment variable
    pass: process.env.EMAIL_PASSWORD, // accessing the EMAIL_PASSWORD environment variable
  },
});

const mailOptions = {
  from: "Reuben <reubens@missionreadyhq.com>",
  to: "youremail@gmail.com",
  subject: "Test",
  html: `<p>HTML version of the message</p>`,
};

transporter.sendMail(mailOptions);
