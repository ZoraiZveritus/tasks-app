import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Link, Paper } from '@mui/material';
import axiosInstance from '../axiosInstance';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');

    try {
      let userRole;
      if (email === 'client@example.com') {
        userRole = 'Client';
      } else if (email === 'staff@example.com') {
        userRole = 'Staff';
      } else {
        setError('Invalid email for this demo.');
        return;
      }

      if (userRole === 'Client') {
        navigate('/client-dashboard');
      } else if (userRole === 'Staff') {
        navigate('/staff-dashboard');
      }
    } catch (error) {
      setError('Login failed. Please check your email and password and try again.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper sx={{ p: 4, boxShadow: 3, borderRadius: 2, mt: 10, backgroundColor: '#212121' }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom color="primary">
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
            InputLabelProps={{
              style: { color: '#ccc' },
            }}
            InputProps={{
              style: { color: '#ccc' },
            }}
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
            InputLabelProps={{
              style: { color: '#ccc' },
            }}
            InputProps={{
              style: { color: '#ccc' },
            }}
          />
          {error && (
            <Typography color="error" variant="body2" align="center" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
            Login
          </Button>
          <Typography align="center" sx={{ mt: 2 }}>
            <Link href="#" color="error" underline="hover">
              Forgot Password?
            </Link>
          </Typography>
        </form>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="textSecondary">
            New user?{' '}
            <Link href="/signup" color="primary" underline="hover">
              Sign up here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
