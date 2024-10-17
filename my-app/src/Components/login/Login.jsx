import img from '../../assets/image.png';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/authSlice';
import classes from './login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault(); // Prevent default form submission
  //   setLoading(true); // Set loading state

  //   console.log('Sending login request...', { email, password }); // Debug log

  //   try {
  //     const response = await fetch('http://localhost:3000/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     // Check if the response is okay (status in the range 200-299)
  //     if (!response.ok) {
  //       const errorMessage = await response.json();
  //       throw new Error(errorMessage.message || 'Login failed');
  //     }

  //     const data = await response.json(); // Parse the JSON response
  //     console.log('Login successful:', data); // Log successful login data
  //     dispatch(login(data)); // Dispatch login action
  //     navigate('/'); // Redirect to the homepage after successful login
  //   } catch (error) {
  //     console.error('Login failed:', error); // Log error message
  //     setError(error.message); // Show error from backend
  //     setTimeout(() => setError(''), 2500);
  //   } finally {
  //     setLoading(false); // Reset loading state
  //   }
  // };
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading state
    setError(''); // Clear any previous errors
  
    console.log('Sending login request...', { email, password }); // Debug log
  
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      // Check if the response is okay (status in the range 200-299)
      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message || 'Login failed');
      }
  
      const data = await response.json(); // Parse the JSON response
      console.log('Login successful:', data); // Log successful login data
  
      // Dispatch login action with user data
      dispatch(login({ token: data.token, others: data.others })); // Ensure the structure matches your auth slice
      navigate('/'); // Redirect to the homepage after successful login
    } catch (error) {
      console.error('Login failed:', error); // Log error message
      setError(error.message); // Show error from backend
      setTimeout(() => setError(''), 2500); // Clear error after 2.5 seconds
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  
  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeftSide}>
          <img src={img} className={classes.leftImg} alt="login visual" />
        </div>
        <div className={classes.loginRightSide}>
          <h2 className={classes.title}>Login</h2>
          <form onSubmit={handleLogin} className={classes.loginForm}>
            <input
              type="email"
              placeholder="Type email"
              value={email} // Bind value to state
              onChange={(e) => setEmail(e.target.value)} // Update state on input
              required
            />
            <input
              type="password"
              placeholder="Type password"
              value={password} // Bind value to state
              onChange={(e) => setPassword(e.target.value)} // Update state on input
              required
            />
            <button className={classes.submitBtn} disabled={loading}> {/* Disable button during loading */}
              {loading ? 'Logging in...' : 'Login'} {/* Show loading text */}
            </button>
            <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
          </form>
          {error && (
            <div className={classes.errorMessage}>
              {error} {/* Display error message */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
