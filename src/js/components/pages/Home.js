import React from "react";
import {Link} from 'react-router-dom';
import '../../../sass/components/pages/home.sass';
import AddPlantModal from "../layout/AddPlantModal.js"
import * as PlantActions from "../../actions/PlantActions";
import * as GardenActions from "../../actions/GardenActions.js"
import PlantStore from "../../stores/PlantStore";
import GardenStore from "../../stores/GardenStore"
import Garden from '../shared/gridElements/Garden';
import Plants from "../layout/Plants"
import { Button } from 'react-bootstrap';
import AnimateHeight from 'react-animate-height';
import MorphTest from '../../animtions/morphTest.js'

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.serviceStart = this.serviceStart.bind(this);
    this.serviceError = this.serviceError.bind(this);
    this.refreshPlants = this.refreshPlants.bind(this);
    this.togglePlantsDisplay = this.togglePlantsDisplay.bind(this);
    this.closeAddPlantModal = this.closeAddPlantModal.bind(this);
    this.openAddPlantModal = this.openAddPlantModal.bind(this);

    //SVG TEST
    this.morphTest = new MorphTest();

    this.state = {
      isLoading: true,
      loadingError: false,
      plants: [],
      garden: [],
      displayPlants: false,
      showAddPlantModal: false
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
    GardenActions.getPlotsPlants();
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
    });
  }

  togglePlantsDisplay() {
    this.setState({displayPlants:!this.state.displayPlants})
  }

  openAddPlantModal() {
    this.setState({showAddPlantModal:true});
  }

  closeAddPlantModal() {
    this.setState({showAddPlantModal:false});
  }

  render() {
    return (
      <div>
        <div class="home-wrap">
          {
            this.state.isLoading ?
              <div>Loading Widget</div>
            :
              <div>
                <Button bsStyle="primary" onClick={this.togglePlantsDisplay.bind(this)}>{(this.state.displayPlants?"Hide":"Show")} Plants</Button>
                <Button bsStyle="primary" onClick={this.openAddPlantModal.bind(this)}>Add Plant</Button>
                <AnimateHeight
                  duration={ 500 }
                  height={ this.state.displayPlants?"100":"0" }>
                  <Plants plants={this.state.plants}/>
                </AnimateHeight>
                <Garden plants={this.state.plants}/>
              </div>
          }
        </div>
        <AddPlantModal
          showModal={this.state.showAddPlantModal}
          close={this.closeAddPlantModal}/>
        <MorphTest/>
      </div>
    );
  }
}
