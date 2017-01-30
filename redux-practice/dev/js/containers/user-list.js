import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectUser } from '../actions/index'

//components get automatically updated whenever the store changes
class UserList extends Component {

  createListItems() {
    return this.props.users.map(user => {
      return (
        <li key={ user.id } onClick={ () => this.props.selectUser(user) }>
          { user.first } { user.last }
        </li>
      )
    })
  }

  render() {
    return (
      <ul>
        { this.createListItems() }
      </ul>
    )
  }
}

// lets you choose which pieces of data you want to provide to components
// take users and pass to user list
function mapStateToProps(state) {
  return {
    users: state.users
  }
}

// pass action to redux and to component
function matchDispatchToProps(dispatch) { // dispatch => call a function
  return bindActionCreators({
    // you can register all your actions here
      selectUser: selectUser
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
