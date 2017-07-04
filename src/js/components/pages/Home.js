import React from "react";
import {Link} from 'react-router-dom';
import '../../../sass/components/pages/home.sass'

import Garden from '../shared/gridElements/Garden'

export default class Home extends React.Component {

  render() {

    return (
      <div>
        <div class="home-wrap">
          Home
          <Garden />
        </div>
      </div>
    );
  }
}
