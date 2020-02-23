import React, { Component } from "react";

//not the cleanest way to do this. Should do it by control state of inputs (see w7d3 lecture code/movies-app/src/App.js)
class NewBeer extends Component {
  render() {
    return (
      <div>
        <form
          action="https://ih-beers-api2.herokuapp.com/beers/new"
          method="post"
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="tagline">Tagline:</label>
          <input type="text" id="tagline" name="tagline" />
          <br />
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" />
          <br />
          <label htmlFor="first_brewed">First brewed:</label>
          <input type="text" id="first_brewed" name="first_brewed" />
          <br />
          <label htmlFor="brewers_tips">Brewers tips:</label>
          <input type="text" id="brewers_tips" name="brewers_tips" />
          <br />
          <label htmlFor="attenuation_level">Attenuation Level:</label>
          <input
            type="number"
            id="attenuation_level"
            name="attenuation_level"
          />
          <br />
          <label htmlFor="contributed_by">Contributed by:</label>
          <input type="text" id="contributed_by" name="contributed_by" />
          <br />
          <button>Add beer</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
