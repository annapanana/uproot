import React from "react";
import {Modal} from 'react-bootstrap';
const Settings = require('Settings');

export default class GridModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {plant, plot} = this.props;

    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.props.close.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>{plant.name}, {plant.family}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Plot ID: {plot.id}
              <br/>
              Bed ID: {plot.bed_id}
              <br/>
              Plot Notes: {plot.notes}
              <br/>
              Planting Information: {plant.planting_information}
              <br/>
              Days to Harvest: {plant.days_to_harvest}
              <br/>
              Harvest Information: {plant.harvest_information}
              <br/>
              Plant Notes: {plant.notes}
              <br/>
              <img src={Settings.assetServer + plant.image}/>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={this.props.close.bind(this)}>Close</button>
            </Modal.Footer>
          </Modal>
      </div>
    )
  }
}
