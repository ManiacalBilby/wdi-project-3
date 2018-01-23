import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <Route exact path="/" component={HomePage}/>
      </div>
      </Router>
    );
  }
}

export default App;
