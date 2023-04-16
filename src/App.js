import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes,  Route } from "react-router-dom";
import Registeration from "./components/Registration";
import Home from './components/Home';
import Task from './components/Task';
import Employee from './components/Employee';
import CreateTask from './components/CreateTask'

function App() {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registeration />} />
      <Route path="/task_details" element={<Task />} />
      <Route path='/employee' element={<Employee />} />
      <Route path='/task' element={<CreateTask />} />
      </Routes>
  </BrowserRouter>
);
}
export default App;