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
        Edit Modal
        <button onClick={this.props.toggleEdit.bind(this, false)}>Save</button>
      </div>
    )
  }
}
