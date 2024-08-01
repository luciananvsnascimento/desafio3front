import React, { useState, useEffect } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login-signup.css';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); 
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setMessage('Signup successful!');
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    }
  }, [user, navigate]);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) { 
      setMessage('All fields are required');
      return;
    }
    if (!validateEmail(email)) {
      setMessage('Invalid email address');
      return;
    }
    try {
      await createUserWithEmailAndPassword(email, password);
    } catch (err) {
      setMessage('Error: ' + (err as Error).message);
    }
  };

  return (
    <div className="login-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
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
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        {message && (
          <div className={`message ${error ? 'error' : 'success'}`}>
            {message}
          </div>
        )}
        <Link to="/login" className="custom-link">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default Signup;
