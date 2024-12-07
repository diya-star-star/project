import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18
import App from './App'; // Your main app component
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
