import React from "react";
import {Modal} from 'react-bootstrap';
const Settings = require('Settings');
import * as GardenActions from "../../../actions/GardenActions.js"
import PlantStore from '../../../stores/PlantStore';


export default class CreateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: "notes about plants"
    }
  }

  addPlant() {
    let plantId = $( "#plant-list" ).val();
    console.log(plantId);
    let data = {
      bed_id: this.props.bed_id,
      plot_id: this.props.plot_id,
      plant_id: plantId,
      notes: this.state.notes
    }
    GardenActions.addPlotPlant(data);
  }

  generatePlantList() {
    let plants = PlantStore.getPlants();
    return plants.map((plant, key) => {
      return (
        <option key={key} value={plant.id}>{plant.plant_name}, {plant.variety}</option>
      )
    })
  }

  handleChange(event) {
    this.setState({notes: event.target.value});
  }

  render() {
    return (
      <div>
        <select id="plant-list">
          {this.generatePlantList()}
        </select>
         <input type="text" name="notes" value={this.state.notes} onChange={this.handleChange.bind(this)}/>
         <button onClick={this.addPlant.bind(this)}>Add Plant</button>
      </div>
    )
  }
}
