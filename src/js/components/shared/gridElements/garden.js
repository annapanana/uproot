import React from "react";
import '../../../../sass/components/shared/garden.sass'

import Bed from './bed.js'

export default class Garden extends React.Component {
  render() {
    return (
      <div class="garden-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1510 2210">
          <title>garden</title>
          <g class="style-group">
            <rect class="bed" x="0" y="0" width="400" height="1000"/>
            <rect class="bed" x="800" y="-300" width="400" height="1000" transform="translate(800 1200) rotate(-90)"/>
            <rect class="bed" x="800" y="300" width="400" height="1000" transform="translate(200 1800) rotate(-90)"/>
            <rect class="bed" x="800" y="900" width="400" height="1000" transform="translate(-400 2400) rotate(-90)"/>
            <rect class="bed" x="800" y="1500" width="400" height="1000" transform="translate(-1000 3000) rotate(-90)"/>
            <rect class="bed" x="0" y="1200" width="400" height="1000"/>

            <Bed xVal={0} yVal={0} rows={10} columns = {4}/>
            <Bed xVal={0} yVal={1200} rows={10} columns = {4}/>
            <Bed xVal={500} yVal={0} rows={4} columns={10}/>
            <Bed xVal={500} yVal={600} rows={4} columns={10}/>
            <Bed xVal={500} yVal={1200} rows={4} columns={10}/>
            <Bed xVal={500} yVal={1800} rows={4} columns={10}/>
          </g>
        </svg>
      </div>
    )
  }
}
