import React from "react";
import '../../../../sass/components/shared/garden.sass'

import Bed from './bed.js'

export default class Garden extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="garden-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1510 2210">
          <title>garden</title>
          <g class="style-group">
            <Bed xVal={0} yVal={0} rows={10} columns = {4} id={100}/>
            <Bed xVal={0} yVal={1200} rows={10} columns={4} id={200}/>
            <Bed xVal={500} yVal={0} rows={4} columns={10} id={300}/>
            <Bed xVal={500} yVal={600} rows={4} columns={10} id={400}/>
            <Bed xVal={500} yVal={1200} rows={4} columns={10} id={500}/>
            <Bed xVal={500} yVal={1800} rows={4} columns={10} id={600}/>
          </g>
        </svg>
      </div>
    )
  }
}
