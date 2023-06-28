import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = async () => {
    try {
      // Validate email format
      if (!validateEmail(email)) {
        setLoginError('Invalid email format');
        return;
      }

      // Validate password format (alphanumeric)
      if (!validatePassword(password)) {
        setLoginError('Invalid password format. Password must be alphanumeric.');
        return;
      }

      const response = await axios.post('http://18.136.192.25:5000/api/v1/user/login', {
        email,
        password,
      });

      console.log(response.data); // Display the response data in the console
      // Handle successful login
      if (response.data.success) {
        // Set any success message or perform any desired action
        setLoginError('Login successful');
      } else {
        // Handle login error
        setLoginError(response.data.message);
      }
    } catch (error) {
      console.error(error); // Log the error in the console
      // Handle login error
      setLoginError('An error occurred during login');
    }
  };

  const validateEmail = (email) => {
    // Perform email format validation here
    // You can use a regular expression or any other validation logic
    // Return true if valid, false otherwise
    return true;
  };

  const validatePassword = (password) => {
    // Perform password format validation here
    // You can use a regular expression or any other validation logic
    // Return true if valid, false otherwise
    return true;
  };

  return (
    <div className="container">
      <h1 className="text-center">Welcome To Task Job</h1>
      <div className="form-group">
        <label htmlFor="email">Email Address*</label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password*</label>
        <div className="input-group">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className="form-control"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
      {loginError && <p className="text-danger">{loginError}</p>}
      <p className="centered-text">
        Don't Have an Account? <Link to="/registration">Register Now</Link>
      </p>
    </div>
  );
};

export default Login;
