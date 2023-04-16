import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

document.addEventListener('DOMContentLoaded', (event) => {
  let container = document.getElementById('root'); // Move container declaration inside the event listener
  if(!container) {
    container = document.createElement('div');
    container.id = 'root';
    document.body.appendChild(container);
  }

  createRoot(container).render(
    <App />,
  );
  reportWebVitals();
});