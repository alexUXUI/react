import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import Button from '../Button/Button'
import Parent from '../parentChild/parentChild'
import Collection from '../Collection/Collection'
import log from '../../utils/log'
import './App.css'

const P = props => <p>Functional paragraph! {props.exclamation}</p>
const handleClick = e => e.preventDefault(log('clicked'))

// passing props to P through attributes
const Markup = (
  <div>
    <Nav />
    <P exclamation="Awesome!" />
    <Button />
    <br />
    <Parent />
    <br />
    <Collection />
  </div>
)

class App extends Component {
  // lifecycle hooks 👌
  componentWillMount = () => log('about to render')
  componentDidMount = () => log('already rendered')
  componentWillReceiveProps = () => log('im going to get props')
  shouldComponentUpdate = () => log('I should update')
  componentWillUpdate = () => log('I will update')
  render = () => Markup
}

export default App
