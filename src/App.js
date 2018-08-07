import React, { Component } from 'react';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Flag from './components/Flag'
import './App.css';

class App extends Component {
  render() {
    return ( 
      <Router >
      <div className="App">

      <Flag/>
        <Switch>
          {/* <Route exact path='/' component={Flag}/> */}
        </Switch>
        </div>
      </Router>
     
    );
  }
}

export default App;
