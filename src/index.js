import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from './Nav';
import './index.css';

var Layout = (
  <App>
    <Nav/>
  </App>
)

ReactDOM.render(
  Layout,
  document.getElementById('root')
);
