import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function Clock(props) {
  return (
    <div>
      <h2>{props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  return ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('timer')
  );
}

module.exports = {
  Clock: Clock,
  Tick: tick
}
