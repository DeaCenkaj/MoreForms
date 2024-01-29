import React, { useState } from 'react';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(' ');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateField = (value, minLength, isPassword = false) => {
    if (!value || value.length < minLength) {
      if (isPassword) {
        return 'Password must be at least 8 characters.';
      }
      return `Field must be at least ${minLength} characters.`;
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        setFirstNameError(validateField(value, 2));
        break;
      case 'lastName':
        setLastName(value);
        setLastNameError(validateField(value, 2));
        break;
      case 'email':
        setEmail(value);
        setEmailError(validateField(value, 5, true));
        break;
      case 'password':
        setPassword(value);
        setPasswordError(validateField(value, 8, true));
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        setConfirmPasswordError(value !== password ? 'Passwords do not match.' : '');
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div>
        <label>
          First Name:
          <input type="text" name="firstName" value={firstName} onChange={handleChange} />
          {firstNameError && <p style={{ color: 'red' }}>{firstNameError}</p>}
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input type="text" name="lastName" value={lastName} onChange={handleChange} />
          {lastNameError && <p style={{ color: 'red' }}>{lastNameError}</p>}
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={handleChange} />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={handleChange} />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </label>
      </div>
      <div>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
          {confirmPasswordError && <p style={{ color: 'red' }}>{confirmPasswordError}</p>}
        </label>
      </div>
      <div>
        <h3>Form Data:</h3>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </div>
    </div>
  );
};

export default App;