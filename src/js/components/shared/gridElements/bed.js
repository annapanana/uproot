import React from "react";
import SubGrid from './subGrid.js';

export default class Bed extends React.Component {
  constructor(props) {
    super(props);
    this.plants = [
      {
        name: "broccoli",
        image: `broccoli_icon.svg`,
        area: 1
      },
      {
        name: "corn",
        image: "corn_icon.svg",
        area: 1
      },
      {
        name: "peas",
        image: "peas_icon.svg",
        area: 3
      },
      {
        name: "tomato",
        image: "tomato_icon.svg",
        area: 1
      },
      {
        name: "lettuce",
        image: "lettuce_icon.svg",
        area: 2
      }
    ]
  }

  getRandomPlant() {
    return this.plants[Math.floor(Math.random() * this.plants.length)];
  }

  generateRow(xVal, yVal) {
    //TODO: Get Vegetable from DB for this row ID
    let plant = this.getRandomPlant();
    return (
      <g>
        <rect class="cell" x={xVal+this.props.xVal+5} y={yVal+this.props.yVal+5} width="100" height="100" />
        <SubGrid xVal={xVal+this.props.xVal+5} yVal={yVal+this.props.yVal+5} plant={plant}/>
      </g>
    )
  }

  generateColumn(rowNum, xVal) {
    let rowArr = [];
    for (var i = 0; i < rowNum; i++) {
      rowArr.push(this.generateRow(xVal, i*100));
    }
    return rowArr
  }

  generateGrid(rowNum, columnNum) {
    let columnArr = [];
    for (var i = 0; i < columnNum; i++) {
      columnArr.push(this.generateColumn(rowNum, i*100));
    }
    return columnArr;
  }

  render() {
    return (
      <g>
        {this.generateGrid(this.props.rows, this.props.columns)}
      </g>
    )
  }
}
