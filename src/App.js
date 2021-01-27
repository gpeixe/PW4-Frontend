import "./App.css";
import "./Pages/HomePage/Components/SearchBar";
import HomePage from "./Pages/HomePage";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import AllChampionsPage from './Pages/AllChampionsPage';
import SummonerPage from './Pages/SummonerPage';
import ChampionPage from './Pages/ChampionPage';

class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/champion" component={AllChampionsPage} />
        <Route exact path="/summoner/:summ" component={SummonerPage} />
        <Route exact path="/champion/:champ" component={ChampionPage} />
      </Switch>
    </Router>;
  }
}

export default App;