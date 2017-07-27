import React from "react";
const Settings = require('Settings');
import GridModal from "./gridModal.js";


export default class SubGrid extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

    this.state = {
      plant: this.props.plant,
      bed_id: this.props.bed_id,
      showModal: false
    }
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  generateRow(area, xVal, yVal) {
    return (
      <g>
        <rect class="subcell" x={xVal} y={yVal} width={100/area} height={100/area}/>
        <image onClick={this.openModal.bind(this)} href={Settings.assetServer + this.state.plant.plant_icon} x={xVal} y={yVal} width={100/area} height={100/area}/>
      </g>
    )
  }

  generateColumn(area, xVal) {
    let rowArr = [];
    for (var i = 0; i < area; i++) {
      rowArr.push(this.generateRow(area, xVal, this.props.yVal + (100/area)*i));
    }
    return rowArr
  }

  generateGrid() {
    let area = this.state.plant.area;
    let columnArr = [];
    for (var i = 0; i < area; i++) {
      columnArr.push(this.generateColumn(area, this.props.xVal + (100/area)*i));
    }
    return columnArr;
  }

  render() {
    const plot = {
      id: this.props.plot_id,
      bed_id: this.props.bed_id,
      notes: "A tally of notes about this plot"
    }

    return (
      <g>
        {this.generateGrid()}
        <GridModal showModal={this.state.showModal}
          close={this.closeModal}
          plant={this.state.plant}
          plot={plot}
          />
      </g>
    )
  }
}
