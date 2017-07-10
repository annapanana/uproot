import React from "react";
import {Modal} from 'react-bootstrap';

export default class AddPlantModal extends React.Component {
  constructor(props) {
    super(props);
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
              <input type="text" name="plant-name"/>
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
              Days To Harvest Info:
              <input type="text" name="days-to-harvest-info"/>
            </div>
            <div class="row">
              Min Days To Harvest:
              <input type="number" name="min-days-to-harvest"/>
            </div>
            <div class="row">
              Max Days To Harvest:
              <input type="number" name="max-days-to-harvest"/>
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
            <button onClick={this.props.close.bind(this)}>Save and Close</button>
          </Modal.Footer>
        </Modal>
    )
  }
}
