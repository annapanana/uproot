import React from "react";
import {Modal} from 'react-bootstrap';
import * as PlantActions from "../../actions/PlantActions";

export default class AddModal extends React.Component {
  constructor() {
    super();
    this.saveData = this.saveData.bind(this);
    this.state = {
      formData: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.plantData !== this.props.plantData) {
      const {plantData} = nextProps;
      const formData = {
        id: plantData.id,
        plant_name: plantData.plant_name ? plantData.plant_name : "",
        scientific_name: plantData.scientific_name ? plantData.scientific_name : "",
        family: plantData.family ? plantData.family : "",
        variety: plantData.variety ? plantData.variety : "",
        hybrid_status: plantData.hybrid_status ? plantData.hybrid_status : "",
        plant_image_url: plantData.plant_image_url ? plantData.plant_image_url : "",
        plant_icon: plantData.plant_icon ? plantData.plant_icon : "",
        area: plantData.area ? plantData.area : "",
        planting_info: plantData.planting_info ? plantData.planting_info : "",
        harvest_info: plantData.harvest_info ? plantData.harvest_info : "",
        days_to_harvest: plantData.days_to_harvest ? plantData.days_to_harvest : "",
        notes: plantData.notes ? plantData.notes : "",
        culture: plantData.culture ? plantData.culture : "",
        direct_seeding_info: plantData.direct_seeding_info ? plantData.direct_seeding_info : "",
        disease_pests: plantData.disease_pests ? plantData.disease_pests : "",
        transplanting_info: plantData.transplanting_info ? plantData.transplanting_info : ""
      }

      this.setState({
        formData: formData
      })
    }
   }

  handleChange(other, event) {
    const formData = this.state.formData;
    formData[other] = event.target.value;
    this.setState({formData:formData})
  }

  saveData() {
    PlantActions.addPlant(this.state.formData);
    this.props.close();
  }

  //TODO set area by default from form data
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Plant</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="row">
              Plant Name:
              <input type="text" name="plant-name" value={this.state.formData.plant_name} onChange={this.handleChange.bind(this, "plant_name")}/>
            </div>
            <div class="row">
              Variety:
              <input type="text" name="variety" value={this.state.formData.variety} onChange={this.handleChange.bind(this, "variety")}/>
            </div>
            <div class="row">
              Family:
              <input type="text" name="family" value={this.state.formData.family} onChange={this.handleChange.bind(this, "family")}/>
            </div>
            <div class="row">
              Hybrid Status:
              <input type="text" name="family" value={this.state.formData.hybrid_status} onChange={this.handleChange.bind(this, "hybrid_status")}/>
            </div>
            <div class="row">
              Icon URL (just extension):
              <input type="text" name="icon-url" value={this.state.formData.plant_icon} onChange={this.handleChange.bind(this, "plant_icon")}/>
            </div>
            <div class="row">
              Plant Image URL:
              <input type="text" name="image-url" value={this.state.formData.plant_image_url} onChange={this.handleChange.bind(this, "plant_image_url")}/>
            </div>
            <div class="row">
              Area:
              <select onChange={this.handleChange.bind(this, "area")}>
                <option value="1">1 plant x 1 plant</option>
                <option value="2">2 plants x 2 plants</option>
                <option value="3">3 plants x 3 plants</option>
                <option value="4">4 plants x 4 plants</option>
              </select>
            </div>
            <div class="row">
              Planting Info:
              <input type="text" name="planting-info" value={this.state.formData.planting_info} onChange={this.handleChange.bind(this, "planting_info")}/>
            </div>
            <div class="row">
              Days To Harvest:
              <input type="number" name="days-to-harvest" value={this.state.formData.days_to_harvest} onChange={this.handleChange.bind(this, "days_to_harvest")}/>
            </div>
            <div class="row">
              Harvest Info:
              <input type="text" name="harvest-info" value={this.state.formData.harvest_info} onChange={this.handleChange.bind(this, "harvesting_info")}/>
            </div>
            <div class="row">
              Culture:
              <input type="text" name="harvest-info" value={this.state.formData.culture} onChange={this.handleChange.bind(this, "culture")}/>
            </div>
            <div class="row">
              Direct Seeding Info:
              <input type="text" name="direct-seeding-info" value={this.state.formData.direct_seeding_info} onChange={this.handleChange.bind(this, "direct_seeding_info")}/>
            </div>
            <div class="row">
              Transplanting Info:
              <input type="text" name="transplanting-info" value={this.state.formData.transplanting_info} onChange={this.handleChange.bind(this, "transplanting_info")}/>
            </div>
            <div class="row">
              Disease Pests:
              <input type="text" name="disease-pests" value={this.state.formData.disease_pests} onChange={this.handleChange.bind(this, "disease_pests")}/>
            </div>
            <div class="row">
              Notes:
              <input type="text" name="notes" value={this.state.formData.notes} onChange={this.handleChange.bind(this, "notes")}/>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.saveData.bind(this)}>Save and Close</button>
          </Modal.Footer>
        </Modal>
    )
  }
}
