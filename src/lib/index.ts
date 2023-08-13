import { NextApiRequest, NextApiResponse } from "next";

const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON data
app.use(express.json());

// POST endpoint to send emails
app.post('/api/send-emails', async (req: NextApiRequest, res: NextApiResponse) => {
  const { emails } = req.body;

  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure your email sending service
      service: 'Gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
      },
    });

    // Send emails
    await Promise.all(
      emails.map(async (email: any) => {
        const mailOptions = {
          from: 'your-email@gmail.com',
          to: email,
          subject: 'Exam Timetable Update',
          text: 'The exam timetable has been updated.',
        };

        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${email}`);
      })
    );

    console.log('All emails sent successfully');
    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ error: 'Error sending emails' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
