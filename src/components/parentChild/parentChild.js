import React, { Component } from 'react'

class Parent extends Component {
  constructor(props) {
    super(props)
    this.callParent = this.callParent.bind(this) // bind the context of `this`
  }

  render(){
    // parent passes function down to child through props
    return (
      <Child callParent={this.callParent}/>
    )
  }

  callParent(e) {
    e.preventDefault()
    console.log('Parent called from Child')
  }
}

class Child extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    // child invokes function within parent through props
    return(
      <button onClick={this.props.callParent}>Call Parent</button>
    )
  }
}

export default Parent
