import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ goToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert('User Registered Successfully!');
    if (goToLogin) {
      goToLogin();
    } else {
      navigate('/login', { replace: true });
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Signup</button>
      </form>

      <p>
        Already have an account?{' '}
        <button onClick={() => (goToLogin ? goToLogin() : navigate('/login'))}>
          Login
        </button>
      </p>
    </div>
  );
}

export default Signup;
