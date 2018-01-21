import React from "react";
import {Modal, Button} from 'react-bootstrap';
import * as GardenActions from "../../actions/GardenActions";
import PlantStore from "../../stores/PlantStore";
const Settings = require('Settings');

import '../../../sass/components/layout/gardenModal.sass';

export default class GardenModal extends React.Component {
  constructor() {
    super();
    this.selectPlant = this.selectPlant.bind(this);
  }

  selectPlant(plant) {
    console.log(plant);
  }

  displayPlants(plants) {
    return plants.map((plant, key) => {
      console.log(plant);
      return (
        <div key={key} class="modal-tile">
          <img src={Settings.assetServer + plant.plant_icon} alt={plant.plant_name} class="icon-thumb"/>
          {plant.plant_name}
          <Button bsStyle="primary" onClick={this.selectPlant.bind(this, plant)}>
            Select
          </Button>
        </div>
      )
    })
  }

  render() {
    const {plants} = this.props;

    return (
      <Modal show={this.props.showModal} onHide={this.props.close.bind(this)}>
        <div class="garden-modal-wrap">
          <Modal.Header closeButton>
            <Modal.Title>Add Plant</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="plant-list">
              {this.displayPlants(plants)}
            </div>
          </Modal.Body>
        </div>
      </Modal>
    )
  }
}
