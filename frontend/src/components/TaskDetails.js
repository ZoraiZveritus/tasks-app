import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import axiosInstance from '../axiosInstance';

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axiosInstance.get(`/tasks/${id}`);
        setTask(response.data);
      } catch (error) {
        setError('Failed to load task details. Please try again.');
        console.error('Error fetching task details:', error);
      }
    };

    fetchTask();
  }, [id]);

  if (error) {
    return (
      <Container maxWidth="sm">
        <Typography color="error" variant="body2" sx={{ mt: 5 }}>
          {error}
        </Typography>
      </Container>
    );
  }

  if (!task) {
    return (
      <Container maxWidth="sm">
        <Typography variant="h6" sx={{ mt: 5 }}>
          Loading task details...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Paper sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {task.taskName}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {task.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
            Status: {task.state}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            Created At: {new Date(task.createdAt).toLocaleDateString()}
          </Typography>
          {task.files?.map((file) => (
            <Button
              key={file.id}
              href={file.url}
              variant="outlined"
              color="primary"
              sx={{ mt: 2, textTransform: 'none' }}
            >
              Download {file.name}
            </Button>
          ))}
        </Paper>
      </Box>
    </Container>
  );
};

export default TaskDetails;
