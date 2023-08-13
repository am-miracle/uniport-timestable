const sendEmails = async () => {
    const emailArray = ['email1@example.com', 'email2@example.com']; // Replace with your actual email addresses
    try {
      const response = await fetch('/api/send-emails', {
        method: 'POST',
        body: JSON.stringify({ emails: emailArray }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        alert('Exam timetable has been updated. Emails sent successfully.');
      } else {
        alert('Error sending emails.');
      }
    } catch (error) {
      console.error('Error sending emails:', error);
    }
};