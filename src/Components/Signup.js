import React, { useState } from 'react';
import './Css/Footer.css'

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {  
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Submitted:', { username, email, password });
    // Reset the form fields
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="form-input"
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="form-input"
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="form-input"
        />
      </label>
      <br />
      <button type="submit" className="submit-btn">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;





