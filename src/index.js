import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title ="ReactJs for beginners"
root.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);

