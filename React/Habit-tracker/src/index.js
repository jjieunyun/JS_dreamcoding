import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //엄격모드
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

