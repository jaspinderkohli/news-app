import './App.css';
import NavBar from './components/NavBar';

import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

export default class App extends Component {
  // render is a lifecycle method - it is called when the component is mounted
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar/>
          {/* <News pageSize={12} country="ca" category="general"/> */}
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={12} country="ca" category="general"/>}/>
            <Route exact path="/business" element={<News key="business" pageSize={12} country="ca" category="business"/>}/>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={12} country="ca" category="entertainment"/>}/>
            <Route exact path="/general" element={<News key="general" pageSize={12} country="ca" category="general"/>}/>
            <Route exact path="/health" element={<News key="health" pageSize={12} country="ca" category="health"/>}/>
            <Route exact path="/science" element={<News key="science" pageSize={12} country="ca" category="science"/>}/>
            <Route exact path="/sports" element={<News key="sports" pageSize={12} country="ca" category="sports"/>}/>
            <Route exact path="/technology" element={<News key="technology" pageSize={12} country="ca" category="technology"/>}/>

          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

