import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class BeerList extends Component {
  state = {
    beers: [],
    search: ""
  };

  handleChange = event => {
    // console.log(event.target.value);
    this.setState({
      search: event.target.value
    });
  };

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(response => {
      // console.log(response.data);
      this.setState({
        beers: response.data
      });
    });
  }

  componentDidUpdate() {
    // console.log(this.state.search);
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.search}`
      )
      .then(response => {
        this.setState({
          beers: response.data
        });
      });
  }

  render() {
    // console.log(this.state.search);
    return (
      <div>
        <h2>
          <Link to="/new-beer">Add a Beer</Link>
        </h2>
        <p>
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            id="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </p>
        {this.state.beers.map(beer => {
          return (
            <div key={beer._id}>
              <p>
                <img height="100px" src={beer.image_url} alt="beer" />
              </p>
              <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
              {beer.tagline ? <p>{beer.tagline}</p> : null}
              {beer.contributed_by ? (
                <p>Created by: {beer.contributed_by}</p>
              ) : null}
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default BeerList;
