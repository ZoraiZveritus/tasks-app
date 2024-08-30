import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Link } from '@mui/material';
import axiosInstance from '../axiosInstance';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('Login button clicked'); // Add this line
    try {
      const response = await axiosInstance.post('/auth/local', {
        identifier: email,
        password,
      });
  
      if (response.data.jwt) {
        localStorage.setItem('jwt', response.data.jwt);
        const userRole = response.data.user.role.name; // Adjust if necessary based on role structure
        console.log('User role:', userRole); // Add this line
        if (userRole === 'client') {
          navigate('/client-dashboard');
        } else if (userRole === 'staff') {
          navigate('/staff-dashboard');
        }
      }
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
      console.error('Login error:', error);
    }
  };
  
  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 10, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <Typography color="error" variant="body2" align="center" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
            Login
          </Button>
          <Button color="secondary" fullWidth sx={{ mt: 2 }}>
            Forgot Password?
          </Button>
        </form>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            New user? <Link href="/signup" color="primary">Sign up here</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
