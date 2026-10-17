import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes>;
}
