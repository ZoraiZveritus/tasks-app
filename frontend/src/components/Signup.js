import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Radio, RadioGroup, FormControlLabel, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Client');
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    navigate('/client-dashboard'); // For demo purposes, directly navigate to the dashboard
  };

  return (
    <Container maxWidth="xs">
      <Paper sx={{ p: 4, boxShadow: 3, borderRadius: 2, mt: 10, backgroundColor: '#212121' }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom color="primary">
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
          <Typography sx={{ mt: 2, mb: 1 }} color="textSecondary">
            Role:
          </Typography>
          <RadioGroup
            row
            value={role}
            onChange={(e) => setRole(e.target.value)}
            sx={{ justifyContent: 'center' }}
          >
            <FormControlLabel value="Client" control={<Radio color="primary" />} label="Client" />
            <FormControlLabel value="Staff" control={<Radio color="primary" />} label="Staff" />
          </RadioGroup>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
            Signup
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Signup;
