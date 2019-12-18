import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from "./component/Home"
import "./App.css"
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path="/" exact >
        <Home />
        </Route>
        </Switch>
      </Router>
    )
  }
}
