import React, { Component } from 'react'
import logo from '../../../public/logo.svg'
import './Nav.css'

class Nav extends Component {

  componentWillMount() {
    console.log('hooking into life cycle')
  }

  render() {
    return (
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <h4>This is nav component</h4>
      </nav>
    )
  }
}

export default Nav
