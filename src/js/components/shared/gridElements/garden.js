import React from "react";
import '../../../../sass/components/shared/garden.sass'
import Bed from './bed.js'
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

export default class Garden extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {plants} = this.props;
    return (
      <div class="garden-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1510 2210">
          <title>garden</title>
          <g class="style-group">
            <Bed xVal={0} yVal={0} rows={10} columns = {4} bed_id={0} plants={plants}/>
            <Bed xVal={0} yVal={1200} rows={10} columns={4} bed_id={1} plants={plants}/>
            <Bed xVal={500} yVal={0} rows={4} columns={10} bed_id={2} plants={plants}/>
            <Bed xVal={500} yVal={600} rows={4} columns={10} bed_id={3} plants={plants}/>
            <Bed xVal={500} yVal={1200} rows={4} columns={10} bed_id={4} plants={plants}/>
            <Bed xVal={500} yVal={1800} rows={4} columns={10} bed_id={5} plants={plants}/>
          </g>
        </svg>
      </div>
    )
  }
}
