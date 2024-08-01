import React, { useState, useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login-signup.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setMessage('Login successful!');
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  }, [user, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
    } catch (err) {
      setMessage('Error: ' + (err as Error).message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {message && (
          <div className={`message ${error ? 'error' : 'success'}`}>
            {message}
          </div>
        )}
        <Link to="/signup" className="custom-link">Don't have an account? Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;