/*  
  1. Create a GET API endpoint /sendGreeting that returns a hello World as a response
*/

const http = require('http');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.postmarkapp.com',
  port: 587,
  auth: {
    user: '1190d43f-f2de-4094-b1d3-51fa56e1ef85', // accessing the EMAIL environment variable
    pass: '1190d43f-f2de-4094-b1d3-51fa56e1ef85', // accessing the EMAIL_PASSWORD environment variable
  },
});

const sendTheEmail = () => {
  const mailOptions = {
    from: 'Reuben <sebin@missionreadyhq.com>',
    to: 'sebin@missionreadyhq.com',
    subject: 'Test',
    html: `<h1 style="color:red">HTML version of the message. The time now is 
    
    <span> ${ new Date().toLocaleString() } </span>
    
    </h1>`,
  };
  transporter.sendMail(mailOptions);
};

// endpoint - /sendGreeting
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === '/sendGreeting') {
    sendTheEmail();
    res.write('Email has been sent');
  } else if (req.url === '/dontSendGreeting') {
    res.write('This is nothing');
  }
  res.end();
});

server.listen(4000);
