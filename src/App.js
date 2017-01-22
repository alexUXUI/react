import React, { Component } from 'react'
import Nav from './Nav'
import log from './utils/log'
import clock from './clock/clock'
import './App.css'

const MakeP = props =>
  <p>
    Functional paragraph! {props.exclamation}
  </p>

const handleClick = e =>
  e.preventDefault(log('clicked'))

const Markup = (
  <div>
    <Nav />
    <MakeP exclamation="Awesome!" />
    <button onClick={handleClick} >
      Click me
    </button>
    <div id="timer"></div>
  </div>
)

setInterval(clock.Tick, 1000)

class App extends Component {
  componentWillMount = () => log('about to render')
  componentDidMount = () => log('already rendered')
  componentWillReceiveProps = () => log('im going to get props!')
  shouldComponentUpdate = () => log('I should update!')
  componentWillUpdate = () => log('I will update!')
  render = () => Markup
}

export default App
