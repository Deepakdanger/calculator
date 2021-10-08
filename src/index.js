import React from 'react';
import ReactDOM from 'react-dom';
import './components/app.css';
import Routes from './route';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);
