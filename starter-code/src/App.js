import React, { Component } from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import BeerList from "./components/BeerList";
import BeerDetail from "./components/BeerDetail";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

const Navbar = () => {
  return (
    <h1>
      <Link to="/">HOME</Link>
    </h1>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <Switch>
          <Route exact path="/" component={Home} />
          <>
            <Navbar />
            <Route exact path="/beers" component={BeerList} />
            <Route exact path="/random-beer" component={RandomBeer} />
            <Route exact path="/beers/:beerId" component={BeerDetail} />
            <Route exact path="/new-beer" component={NewBeer} />
          </>
        </Switch>
      </div>
    );
  }
}

export default App;
