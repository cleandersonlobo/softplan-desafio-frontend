import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import BuscarProcessos from '../BuscarProcessos';

class App extends Component {

  render() {
    return (
        <Router>
          <Fragment>
            <Route path="/" component={BuscarProcessos} />
          </Fragment>
        </Router>
    )
  }
}


export default App;
