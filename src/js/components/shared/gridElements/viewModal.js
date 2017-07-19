import React from "react";
import {Modal} from 'react-bootstrap';
const Settings = require('Settings');


export default class ViewModay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {plant, plot} = this.props;
    return (
      <div>
        Plot ID: {plot.id}
        <br/>
        Bed ID: {plot.bed_id}
        <br/>
        Plot Notes: {plot.notes}
        <br/>
        Planting Information: {plant.planting_info}
        <br/>
        Days to Harvest: {plant.days_to_harvest}
        <br/>
        Harvest Information: {plant.harvest_info}
        <br/>
        Plant Notes: {plant.notes}
        <br/>
        <img src={Settings.assetServer + plant.plant_image_url}/>
        <button onClick={this.props.toggleEdit.bind(this, true)}>Edit</button>
      </div>
    )
  }
}
