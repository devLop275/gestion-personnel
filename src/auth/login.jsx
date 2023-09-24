import { useNavigate } from 'react-router-dom';
import axios from "axios";
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/auth/signin/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        // Authentication successful, extract the token from the response
        const data = await response.json();
        const token = data.token;

        // Store the token in localStorage or a secure storage mechanism
        localStorage.setItem('token', token);

        // Redirect to the protected home page or any other route
        navigate('/');
      } else {
        alert('Email or Username Incorrect');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className='container mt-4'>
      <div className="card">
        <h1>User Login</h1>
        <form>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
            <button type="button" className='btn btn-primary mt-4' onClick={handleLogin}>
              Login
            </button>
        </form>
      </div>

    </div >
  );
}
export default Login;