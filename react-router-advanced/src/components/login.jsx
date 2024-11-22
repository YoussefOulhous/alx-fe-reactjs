
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login logic
    alert('Logged in successfully!');
    navigate('/profile'); // Redirect to profile after login
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
