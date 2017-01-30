import { combineReducers } from 'redux';
import UserReducer from './reducer-users';

const allReducers = combineReducers({
  // all throught app a piece of data named user this is equal to
  // we are passing UserReducer --> users
  users: UserReducer
})

export default allReducers
