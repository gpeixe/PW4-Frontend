import logo from "./logo.svg";
import "./App.css";
import "./Pages/HomePage/Components/SearchBar";
import HomePage from "./Pages/HomePage";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ChampionsPage from './Pages/ChampionsPage';
import SummonerPage from './Pages/SummonerPage';

class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/champion" component={ChampionsPage} />
        <Route exact path="/summoner" component={SummonerPage} />
      </Switch>
    </Router>;
  }
}

export default App;