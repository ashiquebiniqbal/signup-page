import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles.css';
import axios from 'axios';

const Registration = () => {
  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [institution_name, setInstitutionName] = useState('');
  const [work_time, setWorkTime] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [confirmed, setConfirmed] = useState(false);
  const [step, setStep] = useState(1);
  const [education_level, setEducationLevel] = useState('');

  const handleNext = () => {
    if (step === 1 && full_name && email && position) {
      setStep(2);
    } else if (step === 2 && position === 'Teacher' && institution_name && work_time) {
      setStep(3);
    } else if (step === 2 && position === 'Student' && institution_name && education_level) {
      setStep(3);
    } else if (step === 2 && password.length >= 6 && password === confirmPassword) {
      setStep(3);
    }
    // Make API call to register user
    axios.post('http://18.136.192.25:5000/api/v1/user/register', {
    full_name,
    email,
    position,
    institution_name,
    work_time,
    education_level,
    password
  })
    .then(response => {
      // Handle successful response
      console.log(response.data); // Example: display response data in console
      // Proceed to the next step or perform any necessary actions
    })
    .catch(error => {
      // Handle error
      console.error(error); // Example: display error in console
      // Handle error scenarios or display error message to the user
    });
  };
  

  const handleConfirm = () => {
    // Perform password validation here if needed

    // Redirect to the confirmation page
    setConfirmed(true);
    // Make API call to confirm registration
  axios.post('http://18.136.192.25:5000/api/v1/user/register', {
    full_name,
    email,
    position,
    institution_name,
    work_time,
    education_level,
    password
  })
    .then(response => {
      // Handle successful response
      console.log(response.data); // Example: display response data in console
      // Proceed with further actions or redirect to success page
    })
    .catch(error => {
      // Handle error
      console.error(error); // Example: display error in console
      // Handle error scenarios or display error message to the user
    });
  };

  if (confirmed) {
    return (
      <div className="container">
        <h1 className="text-center">Thank you!</h1>
        <p className="text-center">Your account has been created. Enjoy job task.</p>
        <div className="text-center">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className={`breadcrumb-item ${step === 1 ? 'active' : ''}`}>
              {step === 1 ? (
                <span>&#10004;</span>
              ) : (
                  <span> </span>
              )}
                1 Personal Information
            </li>
            <li className={`breadcrumb-item ${step === 2 ? 'active' : ''}`}>
              {step === 2 ? (
                <span>&#10004;</span>
              ) : (
                <span> </span>
              )}
              2 Security
            </li>
            <li className={`breadcrumb-item ${step === 3 ? 'active' : ''}`}>
              {step === 3 ? (
                <span>&#10004;</span>
              ) : (
                <span> </span>
              )}
              3 Confirmation
            </li>
          </ol>
        </nav>
      </div>
      {step === 1 && (
        <>
          <h1>Personal Information</h1>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter Full Name"
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position</label>
            <select
              className="form-control"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="">Select Position</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
            </select>
          </div>
          {position === 'Teacher' && (
            <>
              <div className="form-group">
                <label htmlFor="institute">Institute</label>
                <select
                  className="form-control"
                  id="institute"
                  value={institution_name}
                  onChange={(e) => setInstitutionName(e.target.value)}
                >
                  <option value="">Select Institute</option>
                  <option value="Dhaka National Medical College">
                    Dhaka National Medical College
                  </option>
                  <option value="Ibrahim Medical College">Ibrahim Medical College</option>
                  <option value="Bangladesh Medical College">Bangladesh Medical College</option>
                  <option value="Holy Family Red Crescent Medical College">
                    Holy Family Red Crescent Medical College
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="workTime">Work Time</label>
                <select
                  className="form-control"
                  id="workTime"
                  value={work_time}
                  onChange={(e) => setWorkTime(e.target.value)}
                >
                  <option value="">Select Work Time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Full-time">Full-time</option>
                </select>
              </div>
            </>
          )}
          {position === 'Student' && (
            <>
              <div className="form-group">
                <label htmlFor="institute">Institute</label>
                <select
                  className="form-control"
                  id="institute"
                  value={institution_name}
                  onChange={(e) => setInstitutionName(e.target.value)}
                >
                  <option value="">Select Institute</option>
                  <option value="Dhaka National Medical College">
                    Dhaka National Medical College
                  </option>
                  <option value="Ibrahim Medical College">Ibrahim Medical College</option>
                  <option value="Bangladesh Medical College">Bangladesh Medical College</option>
                  <option value="Holy Family Red Crescent Medical College">
                    Holy Family Red Crescent Medical College
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="educationLevel">Education Level</label>
                <select
                  className="form-control"
                  id="educationLevel"
                  value={education_level}
                  onChange={(e) => setEducationLevel(e.target.value)}
                >
                  <option value="">Select Education Level</option>
                  <option value="SSC">SSC</option>
                  <option value="HSC">HSC</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Bachelor of Science">Bachelor of Science</option>
                  <option value="Bachelor of Arts">Bachelor of Arts</option>
                  <option value="Master">Master</option>
                </select>
              </div>
            </>
          )}
          <button className="btn btn-primary" onClick={handleNext}>
            Next
          </button>
          <div>
            <p className="centered-text">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <h1>Security</h1>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={handleNext}>
            Next
          </button>
          <div>
            <p className="centered-text">   
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <h1>Confirmation</h1>
          <p>Please review your information and click "Confirm" to complete the registration.</p>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Full Name:</strong> {full_name}
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> {email}
            </li>
            <li className="list-group-item">
              <strong>Position:</strong> {position}
            </li>
            {position === 'Teacher' && (
              <>
                <li className="list-group-item">
                  <strong>Institute:</strong> {institution_name}
                </li>
                <li className="list-group-item">
                  <strong>Work Time:</strong> {work_time}
                </li>
              </>
            )}
            {position === 'Student' && (
              <>
                <li className="list-group-item">
                  <strong>Institute:</strong> {institution_name}
                </li>
                <li className="list-group-item">
                  <strong>Education Level:</strong> {education_level}
                </li>
              </>
            )}
          </ul>
          <button className="btn btn-primary" onClick={handleConfirm}>
            Confirm
          </button>
        </>
      )}
    </div>
  );
};

export default Registration;
