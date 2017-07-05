import React from "react";
const Settings = require('Settings');

export default class SubGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plant: this.props.plant
    }
  }

  generateRow(area, xVal, yVal) {
    return (
      <g>
        <rect class="subcell" x={xVal} y={yVal} width={100/area} height={100/area}/>
        <image href={Settings.assetServer + this.state.plant.image} x={xVal} y={yVal} width={100/area} height={100/area}/>
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
    let area = this.state.plant.area
    let columnArr = [];
    for (var i = 0; i < area; i++) {
      columnArr.push(this.generateColumn(area, this.props.xVal + (100/area)*i));
    }
    return columnArr;
  }

  render() {
    return (
      <g>
        {this.generateGrid()}
      </g>
    )
  }
}
