import React, { Component } from "react";
import axios from "axios";

class BeerDetail extends Component {
  state = {
    beer: null
  };

  getBeerData = () => {
    console.log(this.props.match.params.beerId);
    const beerId = this.props.match.params.beerId;

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          beer: response.data
        });
      });
  };

  //not needed for this app but learn how to use for future ref
  componentDidUpdate(prevProps) {
    // console.log("prev: ", prevProps.match.params.beerId);
    // console.log("curr: ", this.props.match.params.beerId);
    if (prevProps !== this.props) {
      this.getBeerData();
    }
  }

  componentDidMount() {
    this.getBeerData();
  }

  render() {
    let beer = this.state.beer;

    return (
      <div>
        <p>
          <img height="200px" src={beer?.image_url} alt={beer?.name} />
        </p>
        <h3>{beer?.name}</h3>
        {beer?.tagline ? <p>{beer?.tagline}</p> : null}
        {beer?.first_brewed ? <p>Since: {beer?.first_brewed}</p> : null}
        {beer?.attenuation_level ? (
          <p>Attenuation Level: {beer?.attenuation_level}</p>
        ) : null}
        {beer?.description ? <p>{beer?.description}</p> : null}
        {beer?.contributed_by ? (
          <p>Created by: {beer?.contributed_by}</p>
        ) : null}
      </div>
    );
  }
}

export default BeerDetail;
