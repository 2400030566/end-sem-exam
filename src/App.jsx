import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Transport from './pages/Transport';
import Healthcare from './pages/Healthcare';
import Emergency from './pages/Emergency';
import Bills from './pages/Bills';
import Complaints from './pages/Complaints';
import Tourism from './pages/Tourism';

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/transport" element={<Transport/>} />
      <Route path="/healthcare" element={<Healthcare/>} />
      <Route path="/emergency" element={<Emergency/>} />
      <Route path="/bills" element={<Bills/>} />
      <Route path="/complaints" element={<Complaints/>} />
      <Route path="/tourism" element={<Tourism/>} />
    </Routes>
  )
}
