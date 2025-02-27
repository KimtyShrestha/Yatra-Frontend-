import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset requested for:', email);
  };

  return (
    <div className="auth-container">
      <div className="logo">
        <h1>Yatra <span>Sangini</span></h1>
      </div>
      <div className="auth-header">
        <h1>Reset Password</h1>
        <p>Enter your email to receive reset instructions</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            <FaEnvelope /> Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className="auth-button">
          Send Reset Link
        </button>
      </form>
      <div className="auth-links">
        <Link to="/">Back to Sign In</Link>
      </div>
    </div>
  );
}

export default ForgotPassword