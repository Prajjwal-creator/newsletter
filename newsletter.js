// src/components/Newsletter.js
import React, { useState } from 'react';
import axios from 'axios';
import './Newsletter.css'; // Add this for styling

function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/subscribe', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error subscribing to the newsletter');
    }
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-header">
        <h2>SIGN UP FOR OUR DAILY INSIDER</h2>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      <div className="newsletter-footer">
        <div className="explore">
          <h3>Explore</h3>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>
        <div className="support">
          <h3>Support</h3>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="stay-connected">
          <h3>Stay connected</h3>
          <div className="social-icons">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
          </div>
        </div>
        <div className="footer-links">
          <p>DEV@Deakin</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Code of Conduct</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
