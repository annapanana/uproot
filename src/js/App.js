import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Styles
// import 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css';

// Shared Components
// import Footer from './components/shared/Footer'
// import Header from './components/shared/Header'

// Pages
import Home from './components/pages/Home'

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
    </div>
  </Router>
), document.getElementById('app'));
