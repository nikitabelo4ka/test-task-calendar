import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from 'Components/layout/Layout.jsx';
import Calendar from 'Components/calendar/Calendar.jsx';
import Login from 'Components/login/Login.jsx';
import Info from 'Components/info/Info.jsx';
import Profile from 'Components/profile/Profile.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Calendar />} />
            <Route path="login" element={<Login />} />
            <Route path="info" element={<Info />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
