import React from "react";
import SubGrid from './subGrid.js';
import PlantStore from '../../../stores/PlantStore';
// import GardenStore from '../../../stores/GardenStore';

export default class Bed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plants: this.props.plants
    }
  }


  // getRandomPlant() {
  //   return this.state.plants[Math.floor(Math.random() * this.state.plants.length)];
  // }

  generateRow(xVal, yVal, plotVal) {
    let plot_id = `${this.props.bed_id}_${plotVal}`;
    return (
      <g id={plot_id}>
        <rect class="cell" x={xVal+this.props.xVal+5} y={yVal+this.props.yVal+5} width="100" height="100"/>
        <SubGrid
          xVal={xVal+this.props.xVal+5}
          yVal={yVal+this.props.yVal+5}
          bed_id={this.props.bed_id}
          plot_id={plotVal}
          openModal={this.props.openModal}
          plants={this.state.plants}
          />
      </g>
    )
  }

  generateColumn(rowNum, xVal, column_id) {
    let rowArr = [];
    for (var i = 0; i < rowNum; i++) {
      rowArr.push(this.generateRow(xVal, i*100, `${column_id}_${i}`));
    }
    return rowArr
  }

  generateGrid(rowNum, columnNum) {
    let columnArr = [];
    for (var i = 0; i < columnNum; i++) {
      columnArr.push(this.generateColumn(rowNum, i*100, i));
    }
    return columnArr;
  }

  render() {
    const {rows, columns} = this.props;
    return (
      <g class="bed">
        {this.generateGrid(rows, columns)}
      </g>
    )
  }
}
