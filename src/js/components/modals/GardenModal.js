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

  selectPlant(plant, plotData) {
    const data = {
      bed_id: plotData.bed_id,
      plot_id: plotData.plot_id,
      plant_id: plant.id
    }
    GardenActions.addPlotPlant(data)
  }

  displayPlants(plants, plotData) {
    // TODO add selection state to plant if already planted in garden
    return plants.map((plant, key) => {
      return (
        <div key={key} class="modal-tile" onClick={this.selectPlant.bind(this, plant, plotData)}>
          <img src={Settings.assetServer + plant.plant_icon} alt={plant.plant_name} class="icon-thumb"/>
          {plant.plant_name}
        </div>
      )
    })
  }

  render() {
    const {plants, plotData} = this.props;
    return (
      <Modal show={this.props.showModal} onHide={this.props.close.bind(this)}>
        <div class="garden-modal-wrap">
          <Modal.Header closeButton>
            <Modal.Title>Add Plant</Modal.Title>
            Bed: {plotData.bed_id}
            Plot: {plotData.plot_id}
          </Modal.Header>
          <Modal.Body>
            <div class="plant-list">
              {this.displayPlants(plants, plotData)}
            </div>
          </Modal.Body>
        </div>
      </Modal>
    )
  }
}
