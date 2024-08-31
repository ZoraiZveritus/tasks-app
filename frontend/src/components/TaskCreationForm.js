import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import axiosInstance from '../axiosInstance';
import { useNavigate } from 'react-router-dom';

const TaskCreationForm = () => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!taskName || !description) {
      setError('Task name and description are required.');
      return;
    }

    const formData = new FormData();
    formData.append('data', JSON.stringify({ taskName, description }));
    if (file) {
      formData.append('files.file', file);
    }

    try {
      await axiosInstance.post('/tasks', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('Task created successfully!');
      navigate('/client-dashboard');
    } catch (error) {
      setError('Failed to create the task. Please try again.');
      console.error('Task creation error:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Create a New Task
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Task Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
              InputLabelProps={{ style: { color: '#888' } }}
              sx={{ input: { color: '#fff' }, mb: 2 }}
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              InputLabelProps={{ style: { color: '#888' } }}
              sx={{ input: { color: '#fff' }, mb: 2 }}
            />
            <input
              type="file"
              accept="application/pdf,image/*"
              onChange={handleFileChange}
              style={{ marginTop: '20px', marginBottom: '20px', display: 'block', color: '#fff' }}
            />
            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
            {success && (
              <Typography color="primary" variant="body2" sx={{ mt: 1 }}>
                {success}
              </Typography>
            )}
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Create Task
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default TaskCreationForm;
