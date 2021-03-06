import React from 'react'

import '../styles/Bikes.css'

const Bikes = (props) => {

    return (
        <div className="bikes">

            <div className="bikes-background">

                <img
                    className="bikes-img"
                    src="/images/Bikes/Background_Bikes.jpeg"
                    alt="Mountain Bikes"
                />

            </div>

            <div className="container-top-bikes">

                <h1>Les nostres bicis elèctriques de muntanya</h1>
                <h3>Bicicletes de les marques capdavanteres del sector de les elèctriques MTB</h3>
                <hr />
                <p><span className="span-bikes">Haibike</span> és popularment coneguda com la marca pionera i líder aquest sector, per tant, podem estar orgullosos d'oferir un servei competent i actualitzat a les novetats del mercat</p>
                <p>D'aquesta manera garantim màxima seguretat durant l'excursió i una qualitat òptima de les nostres bicis elèctriques de muntanya</p>

            </div>

            <div className="container-bottom-bikes">

                <div className="subcontainer-point-bikes">

                    <h3>La trialera</h3>
                    <p>Haibike Sduro AllMtn SL</p>
                    <img src="/images/Bikes/Haibike-sDuro-AllMtn-SL-2016.jpg" alt="Haibike Sduro AllMtn SL" />
                    <p>La més divertida i atrevida. Apte pels camins més tècnics</p>
                    <p> Doble suspensió. Motor de 250 W i 70 Nm de parell</p>

                </div>

                <div className="subcontainer-point-bikes">

                    <h3>La fondista</h3>
                    <p>Haibike Sduro HardSeven</p>
                    <img src="/images/Bikes/Haibike-sDuro-Hard-Seven-2018.jpg" alt="Haibike Sduro HardSeven" />
                    <p>Ideal per recórrer rutes llargues</p> <p>Suspensió a davant. Motor de 250 W i bateria de 400 Wh</p>

                </div>

            </div>

        </div>
    )
}

export default Bikes