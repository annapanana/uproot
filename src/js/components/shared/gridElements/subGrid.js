import React from "react";

export default class TwyByTwo extends React.Component {

  generateRow(xVal, yVal) {
    return (
      <g>
        <rect class="subcell" x={xVal+this.props.xVal} y={yVal+this.props.yVal} width={100/this.props.dimension} height={100/this.props.dimension} rx="8" ry="8"/>
      </g>
    )
  }

  generateColumn(rowNum, xVal) {
    let rowArr = [];
    for (var i = 0; i < rowNum; i++) {
      rowArr.push(this.generateRow(xVal, i*(100/this.props.dimension)));
    }
    return rowArr
  }

  generateGrid(rowNum, columnNum) {
    let columnArr = [];
    for (var i = 0; i < columnNum; i++) {
      columnArr.push(this.generateColumn(rowNum, i*(100/this.props.dimension)));
    }
    return columnArr;
  }

  render() {
    return (
      <g>
        {this.generateGrid(this.props.dimension, this.props.dimension)}
      </g>
    )
  }
}
