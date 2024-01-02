import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_hx93jqa', 'template_4gphg4x', e.target, 'ul-kJZd0_-XpIN7m3')
      .then((result) => {
        console.log(result.text);
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
        // Show thank you message
        setShowThankYouMessage(true);
        // Optionally hide the message after a few seconds
        setTimeout(() => setShowThankYouMessage(false), 5000);
      }, (error) => {
        console.log(error.text);
        // Handle errors (e.g., show an error message)
      });
  };
  
  
  return (
    <div className='contact'>
      <div className='contact-body'>
      <h2>Contact Me</h2>
      <form onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
        />
        <button type="submit">Submit</button>
      </form>
      {showThankYouMessage && (
     <div className="thank-you-message">
     <img src="/thankyou.gif" alt="Thank You" className="thank-you-gif" />
     <p>Thanks for reaching out! I will reply ASAP!</p>
   </div>
    )}
      <p>Email: hkboscolam@gmail.com</p>
      <p>
  LinkedIn: 
  <a href="https://www.linkedin.com/in/kai-on-lam-a9a705260" target="_blank" rel="noopener noreferrer">
    https://www.linkedin.com/in/kai-on-lam-a9a705260
  </a>
</p>      </div>
    </div>
  );
}

export default Contact;
