import React, { Component } from 'react'

import Header from './Components/Header'
import India from './Components/India'
import World from './Components/World'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="container-fluid">
        <Router>

          <Header />

          <Switch>

            <Route exact path="/">
              <India />
            </Route>

            <Router path="/india">
              <India />
            </Router>

            <Router path="/world">
              <World />
            </Router>

          </Switch>

        </Router>


      </div>
    )
  }
}

export default App;
