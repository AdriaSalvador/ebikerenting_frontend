import React from 'react';
import './App.css';

import Home from './components/Home';
import Bikes from './components/Bikes';

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <div class="sidenav">

          <div class="topnav">
            <img
              src="/images/Ebikerenting_logo.png"
              width="100px"
              alt="Ebikerenting Logo"
            />
            <h2>E-BIKE RENTING</h2>
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
        <Bikes/>

      </div>
    );
  };

}

export default App;
