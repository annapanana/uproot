import React from "react";

const ThreeByThree = (props) => {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101">
        <title>3x3_grid</title>
        <g>
          <rect x="0.5" y="0.5" width="33.33" height="33.33" style="fill: #fff;stroke: #000;stroke-miterlimit: 10"/>
          <rect x="33.83" y="0.5" width="33.33" height="33.33" style="fill: #fff;stroke: #000;stroke-miterlimit: 10"/>
          <rect x="67.17" y="0.5" width="33.33" height="33.33" style="fill: #fff;stroke: #000;stroke-miterlimit: 10"/>
          <rect x="0.5" y="33.83" width="33.33" height="33.33" style="fill: #fff;stroke: #000;stroke-miterlimit: 10"/>
          <rect x="33.83" y="33.83" width="33.33" height="33.33" style="fill: #fff;stroke: #000;stroke-miterlimit: 10"/>
          <rect x="67.17" y="33.83" width="33.33" height="33.33" style="fill: #fff;stroke: #000;stroke-miterlimit: 10"/>
          <rect x="0.5" y="67.17" width="33.33" height="33.33" style="fill: #fff;stroke: #000;stroke-miterlimit: 10"/>
          <rect x="33.83" y="67.17" width="33.33" height="33.33" style="fill: #fff;stroke: #000;stroke-miterlimit: 10"/>
          <rect x="67.17" y="67.17" width="33.33" height="33.33" style="fill: #fff;stroke: #000;stroke-miterlimit: 10"/>
        </g>
      </svg>
    )
  }
}
