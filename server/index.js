const express = require('express');
const cors = require('cors');
require('dotenv').config();
const client = require('twilio')(
    process.env.ACCOUNT_SID,
    process.env.AUTH_TOKEN
);

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/email', (req, res) => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: req.body.email,
      from: 'crowdrecruitapp@gmail.com',
      subject: 'Crowd Recruit: Job Recommendation',
      text: 'Checkout this awesome job opportunity recommended to you. Get paid to get hired!',
      html: '<strong>Checkout this awesome job opportunity recommended to you. Get paid to get hired!</strong>',
    };
    sgMail.send(msg);
});

app.post('/api/text', (req, res) => {
    client.messages.create({
        from: process.env.VERIFIED_NUMBER,
        to: req.body.number,
        body: req.body.message
    })
    .then(() => {
        res.json({ success: true });
    });
});

app.listen(4000);
