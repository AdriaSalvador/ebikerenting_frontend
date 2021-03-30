import React from 'react';
import './App.css';

import { Link, Route } from 'react-router-dom'

import Home from './components/Home';
import Bikes from './components/Bikes';
import Ride from './components/Ride';
import Booking from './components/Booking';
import Contact from './components/Contact';

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <div className="sidenav">

          <div className="topnav">
            <img
              src="/images/Ebikerenting_logo.jpeg"
              width="100px"
              alt="Ebikerenting Logo"
            />
            <h3>E-BIKE VALL DE LORD</h3>
            <p>La nova manera de gaudir de la muntanya</p>
          </div>

          <div className="bottomnav">

            <Link to="/">
              <span>INICI</span>
            </Link>

            <Link to="/bicis">
              <span>LES BICICLETES MTB</span>
            </Link>

            <Link to="/rutes">
              <span>RUTES I EXCURSIONS</span>
            </Link>

            <Link to="/reserva">
              <span>RESERVA</span>
            </Link>

            <Link to="/contacte">
              <span>CONTACTE</span>
            </Link>

          </div>
        </div>

        <Route
          exact path="/"
          render={() => <Home />}
        />

        <Route
          path="/bicis"
          render={() => <Bikes />}
        />

        <Route
          path="/rutes"
          render={() => <Ride />}
        />

        <Route
          path="/reserva"
          render={() => <Booking />}
        />

        <Route
          path="/contacte"
          render={() => <Contact />}
        />

      </div>
    );
  };

}

export default App;
