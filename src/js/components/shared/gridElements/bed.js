import React from "react";

import SubGrid from './subGrid.js';

export default class Bed extends React.Component {
  constructor(props) {
    super(props);
  }

  getRandomVeggie() {
    return Math.floor(Math.random() * 255);
  }

  generateRow(xVal, yVal) {
    return (
      <g>
        <rect class="cell" x={xVal+this.props.xVal+5} y={yVal+this.props.yVal+5} width="100" height="100" />
        <SubGrid dimension={4} xVal={xVal+this.props.xVal+5} yVal={yVal+this.props.yVal+5}/>
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
