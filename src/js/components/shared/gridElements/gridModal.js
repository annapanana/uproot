import React from "react";
import {Modal} from 'react-bootstrap';

import EditModal from "./editModal.js";
import ViewModal from "./viewModal.js";

export default class GridModal extends React.Component {
  constructor(props) {
    super(props);

    this.toggleEdit = this.toggleEdit.bind(this);
    this.state = {
      isEdit:false
    }
  }

  toggleEdit(editState) {
    this.setState({isEdit:editState});
  }

  render() {
    const {plant, plot} = this.props;

    return (
      <Modal show={this.props.showModal} onHide={this.props.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>{plant.name}, {plant.family}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              this.state.isEdit ?
                <EditModal plot={plot} plant={plant} toggleEdit={this.toggleEdit}/>
              :
                <ViewModal plot={plot} plant={plant} toggleEdit={this.toggleEdit}/>
            }
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.props.close.bind(this)}>Close</button>
          </Modal.Footer>
        </Modal>
    )
  }
}
