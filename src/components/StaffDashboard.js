import React from 'react';
import { Container, Box, Typography, Card, CardContent } from '@mui/material';

const StaffDashboard = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 10 }}>
        <Card>
          <CardContent>
            <Typography variant="h4" component="h2">
              Staff Dashboard
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Welcome to the staff dashboard. You can manage all tasks here.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default StaffDashboard;
