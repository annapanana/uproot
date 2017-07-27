import React from "react";
import {Modal} from 'react-bootstrap';

import EditModal from "./editModal.js";
import ViewModal from "./viewModal.js";
import CreateModal from "./createModal.js";

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
    const {plant, plot, plot_id, bed_id} = this.props;
    return (
      <Modal show={this.props.showModal} onHide={this.props.close.bind(this)}>
          <Modal.Header closeButton>
            {
              plant.area ?
                <Modal.Title>{plant.plant_name}, {plant.family}</Modal.Title>
              :
                <div>PLANT SOMETHING NEW</div>
            }

          </Modal.Header>
          <Modal.Body>
            {
              plant.area ?
              <div>
                {
                  this.state.isEdit ?
                    <EditModal plot={plot} plant={plant} toggleEdit={this.toggleEdit}/>
                  :
                    <ViewModal plot={plot} plant={plant} toggleEdit={this.toggleEdit}/>
                }
              </div>
              :
                <CreateModal plot_id={plot_id} bed_id={bed_id} />
            }

          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.props.close.bind(this)}>Close</button>
          </Modal.Footer>
        </Modal>
    )
  }
}
