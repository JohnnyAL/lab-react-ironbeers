import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>
          <Link to="/beers">All Beers</Link>
        </h2>
        <h2>
          <Link to="/random-beer">Random Beer</Link>
        </h2>
        <h2>
          <Link to="/new-beer">New Beer</Link>
        </h2>
      </div>
    );
  }
}

export default Home;
