import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import axiosInstance from '../axiosInstance';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('client');
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/local/register', {
        email,
        password,
        username: email,
        userRole
      });

      if (response.data.jwt) {
        localStorage.setItem('jwt', response.data.jwt);
        if (userRole === 'client') {
          navigate('/client-dashboard');
        } else if (userRole === 'staff') {
          navigate('/staff-dashboard');
        }
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 10, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Signup
        </Typography>
        <form onSubmit={handleSignup}>
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
          <RadioGroup
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
            row
            sx={{ mt: 2, justifyContent: 'center' }}
          >
            <FormControlLabel value="client" control={<Radio />} label="Client" />
            <FormControlLabel value="staff" control={<Radio />} label="Staff" />
          </RadioGroup>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
            Signup
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;
