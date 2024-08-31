import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#000',  // Pitch black background
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img
            src={`${process.env.PUBLIC_URL}/app.png`}
            alt="App Icon"
            style={{ width: '40px', height: '40px', marginRight: '10px' }}
          />
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif', color: '#318CE7' }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: '#318CE7' }}>
              Task Management App
            </Link>
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              color: '#318CE7',
              border: '1px solid #318CE7',
              borderRadius: '20px',
              padding: '6px 20px',
              margin: '0 10px',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '2px',
                backgroundColor: '#318CE7',
                bottom: '0',
                left: '0',
                transform: 'scaleX(0)',
                transformOrigin: 'bottom right',
                transition: 'transform 0.3s ease-out',
              },
              '&:hover::before': {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom left',
              },
              '&:hover': {
                backgroundColor: '#318CE7',
                color: '#000',
                transform: 'scale(1.05)',
                borderColor: '#318CE7',
              },
              transition: 'all 0.3s ease-out',
            }}
          >
            <Link to="/client-dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
              Dashboard
            </Link>
          </Button>
          <Button
            sx={{
              color: '#318CE7',
              border: '1px solid #318CE7',
              borderRadius: '20px',
              padding: '6px 20px',
              margin: '0 10px',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '2px',
                backgroundColor: '#318CE7',
                bottom: '0',
                left: '0',
                transform: 'scaleX(0)',
                transformOrigin: 'bottom right',
                transition: 'transform 0.3s ease-out',
              },
              '&:hover::before': {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom left',
              },
              '&:hover': {
                backgroundColor: '#318CE7',
                color: '#000',
                transform: 'scale(1.05)',
                borderColor: '#318CE7',
              },
              transition: 'all 0.3s ease-out',
            }}
          >
            <Link to="/create-task" style={{ textDecoration: 'none', color: 'inherit' }}>
              Create Task
            </Link>
          </Button>
          <Button
            sx={{
              color: '#318CE7',
              border: '1px solid #318CE7',
              borderRadius: '20px',
              padding: '6px 20px',
              margin: '0 10px',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '2px',
                backgroundColor: '#318CE7',
                bottom: '0',
                left: '0',
                transform: 'scaleX(0)',
                transformOrigin: 'bottom right',
                transition: 'transform 0.3s ease-out',
              },
              '&:hover::before': {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom left',
              },
              '&:hover': {
                backgroundColor: '#318CE7',
                color: '#000',
                transform: 'scale(1.05)',
                borderColor: '#318CE7',
              },
              transition: 'all 0.3s ease-out',
            }}
          >
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
              Logout
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
