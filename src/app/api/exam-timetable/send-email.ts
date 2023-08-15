
import axios from 'axios';

export const sendEmail = async (toEmails: string[]) => {
  const emailJsUserId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY; // Replace with your EmailJS user ID
  const emailJsTemplateId = 'template_ofmfvqb'; // Replace with your EmailJS template ID

  const emailData = {
    service_id: 'service_ma83bst', // EmailJS service ID
    template_id: emailJsTemplateId,
    user_id: emailJsUserId,
    template_params: {
      from_name: "CSC Timetable officer",
      to_email: toEmails.join(','),
      subject: 'Exam timetable has been updated',
      message: 'The exam timetable has been updated.',
      bcc: toEmails,
      cc: toEmails,
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

export const sendClassEmail = async (toEmails: string[]) => {
  const emailJsUserId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY; // Replace with your EmailJS user ID
  const emailJsTemplateId = 'template_ofmfvqb'; // Replace with your EmailJS template ID

  const emailData = {
    service_id: 'service_ma83bst', // EmailJS service ID
    template_id: emailJsTemplateId,
    user_id: emailJsUserId,
    template_params: {
      from_name: "CSC Timetable officer",
      to_email: toEmails.join(','),
      subject: 'A Class has been scheduled on the timetable today',
      message: 'A Class has been updated, check your timetable.',
      bcc: toEmails,
      cc: toEmails,
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

export const sendClassUpdateEmail = async (toEmails: string[]) => {
  const emailJsUserId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY; // Replace with your EmailJS user ID
  const emailJsTemplateId = 'template_ofmfvqb'; // Replace with your EmailJS template ID

  const emailData = {
    service_id: 'service_ma83bst', // EmailJS service ID
    template_id: emailJsTemplateId,
    user_id: emailJsUserId,
    template_params: {
      from_name: "CSC Timetable officer",
      to_email: toEmails.join(','),
      subject: 'A Class has been updated today',
      message: 'A Class has been updated, check your timetable.',
      bcc: toEmails,
      cc: toEmails,
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