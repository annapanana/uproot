import React from "react";
import {Modal} from 'react-bootstrap';
import * as PlantActions from "../../actions/PlantActions";

export default class AddPlantModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        plant_name: "Temp",
        family: "Temp",
        plant_image_url: "temp",
        area: 0,
        planting_info: "temp",
        harvest_info: "temp",
        days_to_harvest: 0,
        notes: "temp"
      }
    }
  }

  handleChange(other, event) {
    this.state.formData[other] = event.target.value;
  }

  saveData() {
    PlantActions.addPlant(this.state.formData);
    this.props.close.bind(this);
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Plant</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="row">
              Plant Name:
              <input type="text" name="plant-name" value={this.state.formData.plantName} onChange={this.handleChange.bind(this, "plantName")}/>
            </div>
            <div class="row">
              Family:
              <input type="text" name="family"/>
            </div>
            <div class="row">
              Icon URL:
              <input type="text" name="icon-url"/>
            </div>
            <div class="row">
              Area:
              <select>
                <option value="1">1 plant x 1 plant</option>
                <option value="2">2 plants x 2 plants</option>
                <option value="3">3 plants x 3 plants</option>
                <option value="4">4 plants x 4 plants</option>
              </select>
            </div>
            <div class="row">
              Planting Info:
              <input type="text" name="planting-info"/>
            </div>
            <div class="row">
              Days To Harvest:
              <input type="number" name="days-to-harvest"/>
            </div>
            <div class="row">
              Harvest Info:
              <input type="text" name="harvest-info"/>
            </div>
            <div class="row">
              Notes:
              <input type="text" name="notes"/>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.saveData.bind(this)}>Save and Close</button>
          </Modal.Footer>
        </Modal>
    )
  }
}
