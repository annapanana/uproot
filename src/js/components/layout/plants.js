import React from "react";
const Settings = require('Settings');

export default class Plants extends React.Component {

  displayPlants(plants) {
    return plants.map((plant, key) => {
      return(
        <div key={key}>
          <img src={Settings.assetServer+plant.plant_image_url}/>
          <h6>{plant.plant_name}</h6>
          <p>More Information</p>
        </div>
      )
    })
  }

  render() {
    const {plants} = this.props;
    return (
      <div>
        <div class="plants-wrap">
          {this.displayPlants(plants)}
        </div>
      </div>
    );
  }
}
