import React from 'react';
import './App.css';

import Home from './components/Home';
import Bikes from './components/Bikes';
import Ride from './components/Ride';

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <div class="sidenav">

          <div class="topnav">
            <img
              src="/images/Ebikerenting_logo.jpeg"
              width="100px"
              alt="Ebikerenting Logo"
            />
            <h3>E-BIKE VALL DE LORD</h3>
            <p>La nova manera de gaudir de la muntanya</p>
          </div>

          <div class="bottomnav">
            <a href="#">INICI</a>
            <a href="#">LES BICICLETES MTB</a>
            <a href="#">RUTES I EXCURSIONS</a>
            <a href="#">RESERVA</a>
            <a href="#">CONTACTE</a>
          </div>
        </div>

        {/* <Home/> */}
        {/* <Bikes/> */}
        <Ride/>

      </div>
    );
  };

}

export default App;
