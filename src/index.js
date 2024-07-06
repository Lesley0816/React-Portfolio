import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Add this line if you have global styles
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);