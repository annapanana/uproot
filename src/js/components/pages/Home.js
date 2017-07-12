import React from "react";
import {Link} from 'react-router-dom';
import '../../../sass/components/pages/home.sass';

import * as PlantActions from "../../actions/PlantActions";
import PlantStore from "../../stores/PlantStore";
import Garden from '../shared/gridElements/Garden';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.serviceStart = this.serviceStart.bind(this);
    this.serviceError = this.serviceError.bind(this);
    this.refreshPlants = this.refreshPlants.bind(this);

    this.state = {
      isLoading: true,
      loadingError: false,
      plants: []
    }
  }

  componentWillMount() {
    PlantStore.on("plant_service_start", this.serviceStart);
    PlantStore.on("plant_serice_error", this.serviceError);
    PlantStore.on("plants_loaded", this.refreshPlants);
  }

  componentWillUnmount() {

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
    });

  }

  render() {
    return (
      <div>
        <div class="home-wrap">
          {
            this.state.isLoading ?
              <div>Loading Widget</div>
            :
              <Garden plants={this.state.plants}/>
          }
        </div>
      </div>
    );
  }
}
