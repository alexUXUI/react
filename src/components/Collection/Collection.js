import React, { Component } from 'react'
import './Collection.css'

class Collection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collection: [
        { 'key': 1, name: 'Fred', age: '11' },
        { 'key': 2, name: 'Angela', age: '29' },
        { 'key': 3, name: 'Gary', age: '67' }
      ]
    }

    this.PeopleList = this.PeopleList.bind(this)
  }

  PeopleList(state) {
    const group = state.collection
    const Persons = group.map(person => <li>{person.name}</li>)
    return <ul className="people">{Persons}</ul>
  }

  render() {
    return (
      this.PeopleList(this.state)
    )
  }
}

export default Collection
