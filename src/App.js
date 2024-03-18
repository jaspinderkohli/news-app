import './App.css';
import NavBar from './components/NavBar';

import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  // render is a lifecycle method - it is called when the component is mounted
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={12} />
      </div>
    )
  }
}

