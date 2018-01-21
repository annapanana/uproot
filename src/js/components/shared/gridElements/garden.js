import React from "react";
import '../../../../sass/components/shared/garden.sass'
import Bed from './bed.js'
import AddModal from "../../modals/AddModal.js";
import GardenModal from "../../modals/GardenModal.js";
import GardenStore from '../../../stores/GardenStore';
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

  showGardenModal(){
    this.setState({showGardenModal:true})
  }

  render() {
    const {plants} = this.props;
    return (
      <div class="garden-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1510 2210">
          <title>garden</title>
          <g class="style-group">
            <Bed xVal={0} yVal={0} rows={10} columns = {4} bed_id={100} plants={plants} openModal={this.showGardenModal}/>
            <Bed xVal={0} yVal={1200} rows={10} columns={4} bed_id={200} plants={plants} openModal={this.showGardenModal}/>
            <Bed xVal={500} yVal={0} rows={4} columns={10} bed_id={300} plants={plants} openModal={this.showGardenModal}/>
            <Bed xVal={500} yVal={600} rows={4} columns={10} bed_id={400} plants={plants} openModal={this.showGardenModal}/>
            <Bed xVal={500} yVal={1200} rows={4} columns={10} bed_id={500} plants={plants} openModal={this.showGardenModal}/>
            <Bed xVal={500} yVal={1800} rows={4} columns={10} bed_id={600} plants={plants} openModal={this.showGardenModal}/>
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
          />
      </div>
    )
  }
}
