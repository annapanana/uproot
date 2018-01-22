import React from "react";
import {Link} from 'react-router-dom';
import '../../../sass/components/pages/home.sass';
import AddModal from "../modals/AddModal.js"
import * as PlantActions from "../../actions/PlantActions";
import * as GardenActions from "../../actions/GardenActions.js"
import PlantStore from "../../stores/PlantStore";
import GardenStore from "../../stores/GardenStore"
import Garden from '../shared/gridElements/Garden';
import Plants from "../layout/Plants"
import { Button } from 'react-bootstrap';
import AnimateHeight from 'react-animate-height';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.serviceStart = this.serviceStart.bind(this);
    this.serviceError = this.serviceError.bind(this);
    this.refreshPlants = this.refreshPlants.bind(this);
    this.togglePlantsDisplay = this.togglePlantsDisplay.bind(this);
    this.closePlantModal = this.closePlantModal.bind(this);
    this.openPlantModal = this.openPlantModal.bind(this);

    this.state = {
      isLoading: true,
      loadingError: false,
      plants: [],
      garden: [],
      displayPlants: false,
      showAddPlantModal: false,
      modalPlantData: {}
    }
  }

  componentWillMount() {
    PlantStore.on("plant_service_start", this.serviceStart);
    PlantStore.on("plant_serice_error", this.serviceError);
    PlantStore.on("plants_loaded", this.refreshPlants);
  }

  componentWillUnmount() {
    PlantStore.removeListener("plant_service_start", this.serviceStart);
    PlantStore.removeListener("plant_serice_error", this.serviceError);
    PlantStore.removeListener("plants_loaded", this.refreshPlants);
  }

  componentDidMount() {
    PlantActions.getPlants();
  }

  serviceStart() {
    this.setState({isLoading:true, loadingError:false});
  }

  serviceError() {
    this.setState({isLoading:false, loadingError:true});
    console.error("TODO: LOG SPECIFIC ERROR")
  }

  refreshPlants() {
    this.setState({
      isLoading: false,
      loadingError: false,
      plants: PlantStore.getPlants()
    }, () => {
      setTimeout(() => {
        GardenActions.getPlotsPlants();
      }, 1000)
    });
  }

  togglePlantsDisplay() {
    this.setState({displayPlants:!this.state.displayPlants})
  }

  openPlantModal(plantData) {
    this.setState({showAddPlantModal:true, modalPlantData:plantData?plantData:{}});
  }

  closePlantModal() {
    this.setState({
      showAddPlantModal:false,
      displayPlants: false
    });
  }

  render() {
    const {modalPlantData, plants} = this.state;
    return (
      <div>
        <div class="home-wrap">
          {
            this.state.isLoading ?
              <div>Loading Widget</div>
            :
              <div>
                <div class="header">
                  <img src="../../../assets/header.png" />
                  <div class="nav-buttons">
                    <Button bsStyle="primary" onClick={this.togglePlantsDisplay.bind(this)}>{(this.state.displayPlants?"Hide":"Show")} Plants</Button>
                    <Button bsStyle="primary" onClick={this.openPlantModal.bind(this)}>Add Plant</Button>
                  </div>
                </div>
                <AnimateHeight
                  duration={ 1000 }
                  height={ this.state.displayPlants?"auto":"0" }>
                  <Plants plants={plants} openAddPlantModal={this.openPlantModal.bind(this)}/>
                </AnimateHeight>
                <Garden plants={plants}/>
              </div>
          }
        </div>
        <AddModal
          showModal={this.state.showAddPlantModal}
          close={this.closePlantModal}
          plantData={modalPlantData}/>
      </div>
    );
  }
}
