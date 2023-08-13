
import axios from 'axios';

export const sendEmail = async (toEmails: string[]) => {
  const emailJsUserId = process.env.EMAILJS_PUBLIC_KEY; // Replace with your EmailJS user ID
  const emailJsTemplateId = 'template_ofmfvqb'; // Replace with your EmailJS template ID

  const emailData = {
    service_id: 'service_ma83bst', // EmailJS service ID
    template_id: emailJsTemplateId,
    user_id: emailJsUserId,
    template_params: {
      to_emails: toEmails.join(','),
      subject: 'Exam timetable has been updated',
      message: 'The exam timetable has been updated.',
    },
  };

  try {
    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', emailData);
    if (response.status === 200) {
      console.log('Email sent successfully');
    } else {
      console.error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
};


// import nodemailer from 'nodemailer';

// export const sendEmail = async (toEmails: string[]) => {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: process.env.GMAIL_FROM,
//       pass: process.env.GMAIL_APP_PASSWORD
//     }
//   });

//   const mailOptions = {
//     from: 'your@email.com',
//     to: toEmails.join(','),
//     subject: 'Exam timetable has been updated',
//     text: 'The exam timetable has been updated.',
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// };
// import emailjs from '@emailjs/browser';

// export const sendEmail = async (toEmails: string[]) => {
//     const serviceId = "service_ma83bst";
//     const templateId = 'your_template_id';
//     const userId = process.env.EMAILJS_PUBLIC_KEY;
  
//     try {
//       const response = await emailjs.send(
//         serviceId,
//         templateId,
//         {
//           to_email: toEmails.join(','),
//         },
//         userId
//       );
  
//       console.log('Email sent successfully:', response);
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
//   };
  
