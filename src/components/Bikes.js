import React from 'react'

import '../styles/Bikes.css'

const Bikes = (props) => {

    return (
        <div class="bikes">

            <div class="bikes-background">

                <img
                    class="bikes-img"
                    src="/images/Background_Bikes.jpg"
                    alt="Mountain Bikes"
                />

            </div>

            <div class="container-top">
                <h1>Les nostres bicis elèctriques de muntanya</h1>
                <h3>Bicicletes de les marques capdavanteres del sector de les elèctriques MTB</h3>
                <hr />
                <p><span class="Haibike">Haibike</span> és popularment coneguda com la marca pionera i líder aquest sector, per tant, podem estar orgullosos d'oferir un servei competent i actualitzat a les novetats del mercat</p>
                <br />
                <p>D'aquesta manera garantim màxima seguretat durant l'excursió i una qualitat òptima de les nostres bicis elèctriques de muntanya</p>
                {/* <p></p> */}
            </div>

            <div class="container-bottom">

                <div class="container-point">
                    <h3>La trialera - Haibike</h3>
                    <img src="/images/haibike.png" alt="Haibike" />
                    <p>La més divertida i atrevida. Apte pels camins més tècnics. Doble suspenció. Motor de 250 W i 70 Nm de parell.</p>
                </div>
                <div class="container-point">
                    <h3>La fondista - Haibike</h3>
                    <img src="/images/haibike.png" alt="Haibike" />
                    <p>Un abast de 150 km! Suspenció a davant, Motor de 250 W i bateria de 500 Wh</p>
                </div>
                <div class="container-point">
                    <h3>La jove - Haibike</h3>
                    <img src="/images/haibike.png" alt="Haibike" />
                    <p>La més nova de totes. Bicleta nova del 2021. </p>
                </div>
                <div class="container-point">
                    <h3>La polivalent - Haibike</h3>
                    <img src="/images/haibike.png" alt="Haibike" />
                    <p>Bicicleta tot terreny. Preparada per qualsevol repte!</p>
                </div>

            </div>



        </div>
    )
}

export default Bikes