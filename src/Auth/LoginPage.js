import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [reset, setReset] = useState('Reset');
  const [visiblePassword, setVisibility] = useState(false);

  const navigate = useNavigate(); // React Router hook to navigate

  const changeVisibility = () => {
    setVisibility(!visiblePassword);
  };

  const handleSignupClick = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!name || !password) {
      setMessage('Please enter correct entries.');
      setSuccess('');
      return;
    }

    try {
      // API call to the backend for authentication
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: name, password:password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('');
        setSuccess('Login successful!');
        localStorage.setItem('token', data.token); // Save the token in localStorage

        // Redirect to home page
        navigate('/');
      } else {
        setMessage(data.error || 'Invalid login credentials.');
        setSuccess('');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again later.');
      setSuccess('');
    }
  };

  const navigateToReset = () => {
    navigate('/reset');
  };

  return (
    <div className="App">
      <form onSubmit={handleLogin}>
        <div>
          <label>
            <h2>Login</h2>
          </label>

          <div>
            <div>
              <label>Name</label>
            </div>
            <input
              required
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label>Password</label>
          </div>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
              required
              placeholder="Password"
              type={visiblePassword === true ? 'text' : 'password'}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={changeVisibility}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                color: '#555',
              }}
            >
              {visiblePassword ? '🙈' : '👁️'}
            </span>
          </div>
        </div>

        <button type="submit">Login</button>
        <button onClick={handleSignupClick}>Go to Sign Up</button>
        <p onClick={navigateToReset} className="reset">
          {reset}
        </p>
        {message && <p className="error">{message}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
