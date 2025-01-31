import React from 'react';

function Contact() {
  const emailAddress = 'moonaproducciones@gmail.com';
  const phoneNumber = '+52 664-129-7584';

  return (
    <div className="contact-section">
      <h2>Let’s Connect!</h2>
      <p className="contact-info">
        <strong>Phone:</strong> {phoneNumber} <br />
        <strong>Email:</strong> {emailAddress}
      </p>
      <button
        className="email-button"
        onClick={() => window.location.href = `mailto:${emailAddress}`}
      >
        Send Email
      </button>
    </div>
  );
}

export default Contact;
