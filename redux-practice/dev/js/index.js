import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux' // reducer is a function that says what data we save in our store
import allReducers from './reducers' // break your reducers up
import App from './components/app'
import { Provider } from 'react-redux'

// all the data for application in `store`
// passing in all the reducers
const store = createStore(allReducers) // master data object

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)
