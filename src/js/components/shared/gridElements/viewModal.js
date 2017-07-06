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
        Planting Information: {plant.planting_information}
        <br/>
        Days to Harvest: {plant.days_to_harvest}
        <br/>
        Harvest Information: {plant.harvest_information}
        <br/>
        Plant Notes: {plant.notes}
        <br/>
        <img src={Settings.assetServer + plant.image}/>
        <button onClick={this.props.toggleEdit.bind(this, true)}>Edit</button>
      </div>
    )
  }
}
