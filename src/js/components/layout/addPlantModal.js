import React from "react";
import {Modal} from 'react-bootstrap';

export default class AddPlantModal extends React.Component {
  constructor(props) {
    super(props);
  }

  saveAndClose() {

  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Plant</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.props.close.bind(this)}>Save and Close</button>
          </Modal.Footer>
        </Modal>
    )
  }
}
