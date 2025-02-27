import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', formData);
    // For now, just navigate to dashboard
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="auth-container">
      <div className="logo">
        <h1>Yatra <span>Sangini</span></h1>
      </div>
      <div className="auth-header">
        <h1>Welcome Back!</h1>
        <p>Sign in to find your next travel buddy</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            <FaUser /> Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <FaLock /> Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="auth-button">
          Sign In
        </button>
      </form>
      <div className="auth-links">
        <Link to="/forgot-password">Forgot Password?</Link>
        <span>|</span>
        <Link to="/register">Create Account</Link>
        <span>|</span>
        <Link to="/dashboard">Sign In</Link>
        <span>|</span>
      </div>
    </div>
  );
}

export default Login;