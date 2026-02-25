import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin, goToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (email === 'sunilsamantaray797@gmail.com' && password === '1234') {
      onLogin();
      navigate('/dashboard', { replace: true });
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{' '}
        <button onClick={() => (goToSignup ? goToSignup() : navigate('/signup'))}>
          Signup
        </button>
      </p>
    </div>
  );
}

export default Login;
