var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '-----------@gmail.com',
    pass: '---------------------' // app password
  }
});

var mailOptions = {
  from: 'pulseproject006@gmail.com',
  to: 'lakshmana5296@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});