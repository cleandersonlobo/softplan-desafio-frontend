import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import BuscarProcessos from '../BuscarProcessos';
import ListaProcessos from '../ListaProcessos';

class App extends Component {

  render() {
    return (
        <Router>
          <Fragment>
            <Route path="/" exact component={BuscarProcessos} />
            <Route path="/buscar/:query" component={ListaProcessos} />
          </Fragment>
        </Router>
    )
  }
}


export default App;
