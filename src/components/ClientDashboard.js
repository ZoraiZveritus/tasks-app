import React from 'react';
import { Container, Box, Typography, Card, CardContent } from '@mui/material';

const ClientDashboard = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 10 }}>
        <Card>
          <CardContent>
            <Typography variant="h4" component="h2">
              Client Dashboard
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Welcome to your dashboard. You can manage your tasks here.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ClientDashboard;
