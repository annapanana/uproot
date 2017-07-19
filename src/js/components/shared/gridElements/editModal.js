import React from "react";
import {Modal} from 'react-bootstrap';
const Settings = require('Settings');


export default class EditModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {plant, plot} = this.props;
    return (
      <div>
        Plot Notes:
        <input type="text" name="plot-notes" placeholder={plot.notes}/>
        <br/>
        Planting Information: <input type="text" name="planting-information" placeholder={plant.planting_info}/>
        <br/>
        Days to Harvest: <input type="text" name="days-to-harvest" placeholder={plant.days_to_harvest}/>
        <br/>
        Harvest Information: <input type="text" name="harvest-information" placeholder={plant.harvest_info}/>
        <br/>
        Plant Notes: <input type="text" name="plant-notes" placeholder={plant.notes}/>
        <br/>
        <button onClick={this.props.toggleEdit.bind(this, false)}>Save</button>
      </div>
    )
  }
}
