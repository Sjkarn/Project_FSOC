import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
// import Registeration from "./components/Registration";
import Home from './components/Home';

function App() {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      {/* <Route path="/register" element={<Registeration />} /> */}
      <Route element={<Navigate to="/home"></Navigate>} path="" />
      {/* <Route element={<Navigate to="/register"></Navigate>} path="" /> */}
    </Routes>
  </BrowserRouter>
);
}
export default App;