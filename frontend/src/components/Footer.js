import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#318CE7', p: 3, textAlign: 'center', mt: 5 }}>
      <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
        Follow Us
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Link href="https://facebook.com" target="_blank" sx={{ color: '#318CE7', mx: 1 }}>
          <Facebook />
        </Link>
        <Link href="https://twitter.com" target="_blank" sx={{ color: '#318CE7', mx: 1 }}>
          <Twitter />
        </Link>
        <Link href="https://instagram.com" target="_blank" sx={{ color: '#318CE7', mx: 1 }}>
          <Instagram />
        </Link>
      </Box>
      <Typography variant="body2">
        © 2024 Task Management App. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
