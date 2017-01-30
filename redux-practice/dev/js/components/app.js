import React, { Component } from "react"
import UserList from '../containers/user-list'
require('../../scss/style.scss')

const App = () => (
  <div>
    <h2>Username List</h2>
    <UserList />
    <hr />
    <h4>User details</h4>

  </div>
)

export default App
