import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ClientDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchDummyTasks = () => {
    const dummyTasks = [
      {
        id: 1,
        taskName: 'Design Homepage',
        description: 'Create a modern and responsive homepage design.',
        state: 'Active',
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        taskName: 'Develop API',
        description: 'Develop REST API for user management.',
        state: 'Finished',
        createdAt: new Date().toISOString(),
      },
      {
        id: 3,
        taskName: 'Test Payment Gateway',
        description: 'Test and integrate the payment gateway.',
        state: 'Blocked',
        createdAt: new Date().toISOString(),
      },
      {
        id: 4,
        taskName: 'SEO Optimization',
        description: 'Improve the SEO for the website.',
        state: 'Paused',
        createdAt: new Date().toISOString(),
      },
      {
        id: 5,
        taskName: 'Content Migration',
        description: 'Migrate content from the old website to the new one.',
        state: 'Active',
        createdAt: new Date().toISOString(),
      },
      {
        id: 6,
        taskName: 'Client Feedback Review',
        description: 'Review the client feedback and make necessary changes.',
        state: 'Finished',
        createdAt: new Date().toISOString(),
      },
      {
        id: 7,
        taskName: 'Security Audit',
        description: 'Conduct a full security audit of the application.',
        state: 'Blocked',
        createdAt: new Date().toISOString(),
      },
      {
        id: 8,
        taskName: 'Deploy to Production',
        description: 'Deploy the latest version to the production server.',
        state: 'Paused',
        createdAt: new Date().toISOString(),
      },
      {
        id: 9,
        taskName: 'Bug Fixes',
        description: 'Fix bugs reported in the latest version.',
        state: 'Active',
        createdAt: new Date().toISOString(),
      },
    ];
    setTasks(dummyTasks);
  };
  

  useEffect(() => {
    fetchDummyTasks(); // Load the dummy tasks when the component mounts
  }, []);

  const handleSearch = () => {
    if (searchQuery) {
      const filteredTasks = tasks.filter(task =>
        task.taskName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setTasks(filteredTasks);
    } else {
      fetchDummyTasks(); // Reset to the full dummy list when search is cleared
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 3, mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          My Tasks
        </Typography>
        <TextField
          label="Search Tasks"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3, input: { color: '#fff' }, label: { color: '#888' } }}
        />
        {error && (
          <Typography color="error" variant="body2" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}
        <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#444' }}>
              <TableRow>
                <TableCell><Typography variant="subtitle1" fontWeight="bold" color="#fff">Task Name</Typography></TableCell>
                <TableCell><Typography variant="subtitle1" fontWeight="bold" color="#fff">Description</Typography></TableCell>
                <TableCell><Typography variant="subtitle1" fontWeight="bold" color="#fff">State</Typography></TableCell>
                <TableCell><Typography variant="subtitle1" fontWeight="bold" color="#fff">Created At</Typography></TableCell>
                <TableCell><Typography variant="subtitle1" fontWeight="bold" color="#fff">Actions</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id} hover sx={{ backgroundColor: '#555' }}>
                  <TableCell>{task.taskName}</TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell>{task.state}</TableCell>
                  <TableCell>{new Date(task.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => navigate(`/task/${task.id}`)}
                      sx={{ textTransform: 'none' }}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default ClientDashboard;
