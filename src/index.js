import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Nav from './components/Nav/Nav';

var Layout = (
  <App>
    <Nav/>
  </App>
)

ReactDOM.render(
  Layout,
  document.getElementById('root')
);
