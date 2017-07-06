import React from "react";
import '../../../sass/components/shared/header.sass'
import AddPlantModal from "../layout/AddPlantModal.js"

export default class Header extends React.Component {
  constructor() {
    super();

    this.closeAddPlantModal = this.closeAddPlantModal.bind(this);
    this.openAddPlantModal = this.openAddPlantModal.bind(this);

    this.state = {
      showAddPlantModal: false
    }
  }

  openAddPlantModal() {
    this.setState({showAddPlantModal:true});
  }

  closeAddPlantModal() {
    this.setState({showAddPlantModal:false});
  }

  render() {
    return (
      <div class="header-wrap">
        <button onClick={this.openAddPlantModal.bind(this)}>Add Plant</button>
        <button>View All Plants</button>
        <AddPlantModal
          showModal={this.state.showAddPlantModal}
          close={this.closeAddPlantModal}/>
      </div>
    )
  }
}
