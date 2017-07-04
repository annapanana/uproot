import React from "react";
import '../../../../sass/components/shared/garden.sass'

export default class Garden extends React.Component {
  render() {
    return (
      <div class="garden-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1501 2201">
          <title>garden</title>
          <g class="style-group">
            <rect class="cell" x="0.5" y="0.5" width="400" height="1000"/>
            <rect class="cell" x="800.5" y="-299.5" width="400" height="1000" transform="translate(800 1201) rotate(-90)"/>
            <rect class="cell" x="800.5" y="300.5" width="400" height="1000" transform="translate(200 1801) rotate(-90)"/>
            <rect class="cell" x="800.5" y="900.5" width="400" height="1000" transform="translate(-400 2401) rotate(-90)"/>
            <rect class="cell" x="800.5" y="1500.5" width="400" height="1000" transform="translate(-1000 3001) rotate(-90)"/>
            <rect class="cell" x="0.5" y="1200.5" width="400" height="1000"/>
          </g>
        </svg>
      </div>
    )
  }
}
