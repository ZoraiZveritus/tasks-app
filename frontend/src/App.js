import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ClientDashboard from './components/ClientDashboard';
import TaskCreationForm from './components/TaskCreationForm';
import TaskDetails from './components/TaskDetails'; // We'll create this next
import Layout from './components/Layout';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route path="/create-task" element={<TaskCreationForm />} />
          <Route path="/task/:id" element={<TaskDetails />} /> {/* For viewing task details */}

          {/* Add other routes here */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
