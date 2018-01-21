import React from "react";
const Settings = require('Settings');
import '../../../sass/components/layout/plants.sass';
import { Button } from 'react-bootstrap';


export default class Plants extends React.Component {

  displayPlants(plants) {
    console.log("plants", plants);
    return plants.map((plant, key) => {
      // TODO set max char count for culture
      return(
        <div key={key} class="plant-info">
          <img class="photo-img" src={plant.plant_image_url}/>
          <h3>{plant.plant_name}</h3>
          <div>
            <h4>{plant.variety}</h4>
            <h4>{plant.family}</h4>
            <h4>{plant.scientific_name}</h4>
            <h4>{plant.hybrid_status}</h4>
          </div>
          <p>{plant.culture}</p>
          <Button bsStyle="primary" onClick={this.props.openAddPlantModal.bind(this, plant)}>View & Plant</Button>
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
