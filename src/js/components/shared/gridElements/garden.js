import React from "react";
import '../../../../sass/components/shared/garden.sass'
import Bed from './bed.js'
import AddModal from "../../modals/AddModal.js";
import GardenModal from "../../modals/GardenModal.js";
import Background from "./Background.js";
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

export default class Garden extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.showGardenModal = this.showGardenModal.bind(this);
    this.modalData = {}
    this.state = {
      showPlantModal: false,
      showGardenModal: false
    }
  }

  openModal(modalData) {
    this.modalData = modalData;
    this.setState({ showPlantModal: true });
  }

  closeModal() {
    // TODO save data?
    this.setState({
      showPlantModal: false,
      showGardenModal: false
    });
  }

  showGardenModal(modalData){
    this.modalData = modalData;
    this.setState({showGardenModal:true})
  }

  render() {
    const {plants} = this.props;
    return (
      <div class="garden-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1510 2210" id="garden">
          <title>garden</title>
          <Background columns={10} rows={10}/>
          <g class="style-group">
            <Bed xVal={25} yVal={25} rows={10} columns = {4} bed_id={100} plants={plants} openModal={this.showGardenModal}/>
            <Bed xVal={25} yVal={1175} rows={10} columns={4} bed_id={200} plants={plants} openModal={this.showGardenModal}/>
            <Bed xVal={475} yVal={25} rows={4} columns={10} bed_id={300} plants={plants} openModal={this.showGardenModal}/>
            <Bed xVal={475} yVal={625} rows={4} columns={10} bed_id={400} plants={plants} openModal={this.showGardenModal}/>
            <Bed xVal={475} yVal={1175} rows={4} columns={10} bed_id={500} plants={plants} openModal={this.showGardenModal}/>
            <Bed xVal={475} yVal={1775} rows={4} columns={10} bed_id={600} plants={plants} openModal={this.showGardenModal}/>
          </g>
        </svg>
        <AddModal showModal={this.state.showPlantModal}
          close={this.closeModal}
          plantData={this.modalData.plant}
          modalData={this.modalData}
          />
        <GardenModal
          showModal={this.state.showGardenModal}
          close={this.closeModal}
          plants={plants}
          plotData={this.modalData}
          />
      </div>
    )
  }
}
