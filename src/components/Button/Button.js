import React, { Component } from 'react'
import './Button.css'

/* Notes on Components:
 * State is immutable but editable
 * Props is immutable and not editable
 * The is es6 sytax as opposed to React.createClass
 */

class Button extends Component {

  constructor(props) {
    super(props) // always call super and pass props
    this.increment = this.increment.bind(this) // put bind in constructor func
    this.state = { // set state in constructor func with es6 Component
      count: 0
    }
  }

  increment() {
    this.setState({ // retuns new state object
      count: this.state.count + 1
    })
  }

  render() {
    // have to use `className` for class attr
    // must return one parent element
    // .jsx wrapped in `()`
    return (
      <div>
        { this.state.count > 3 ? // conditional rendering in render func
            <h1 className="state-count low">Your state: {this.state.count}</h1> :
            <h1 className="state-count high">Your state: {this.state.count}</h1>
        }
        <button onClick={this.increment}>
          Add one
        </button>
      </div>
    )
  }

}

export default Button
