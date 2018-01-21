import React from "react";

export default class Background extends React.Component {

  generateColumns(cols, xpos) {
    console.log("???");
    console.log(xpos);
    const colImg = [];
    for (var i = 0; i < cols; i++) {
      const ypos = i*250;
      colImg.push(<image href="/assets/ground_tile.svg" x={xpos} y={ypos} width="251" height="251"/>)
    }
    return colImg;
  }

  generateRows(rows, cols) {
    const rowImg = [];
    for (var i = 0; i < rows; i++) {
      const xpos = i*250;
      rowImg.push(this.generateColumns(cols, xpos))
    }
    return rowImg;
  }

  render() {
    const {rows, columns} = this.props;
    return (
      <g>
        {this.generateRows(rows, columns)}
      </g>
    )
  }
}
