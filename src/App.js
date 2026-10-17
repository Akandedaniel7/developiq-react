import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Navigate to="/" replace/>}/>
    </Routes>
  </BrowserRouter>;
}
