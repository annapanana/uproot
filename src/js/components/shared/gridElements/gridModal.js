import React from "react";
import {Modal} from 'react-bootstrap';

export default class GridModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.props.close.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
              <button onClick={this.props.close.bind(this)}>Close</button>
            </Modal.Footer>
          </Modal>
      </div>
    )
  }
}
