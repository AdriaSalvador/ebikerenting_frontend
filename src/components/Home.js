import React from 'react'

import '../styles/Home.css'

const Home = (props) => {

    return (
        <div class="home">

            <div class="home-background">

                <img
                    class="home-img"
                    src="/images/Background_Mountain.jpg"
                    alt="Home Mountain"
                />

            </div>

            <div class="container-top-home">

                <h1>Lloguer de bicicletes elèctriques MTB</h1>
                <hr />
                <p>Volem oferir una nova manera de descobrir la muntanya i l'entorn</p>
                <br />
                <p>Al ritme de cadascú, sense horaris, sense que el relleu sigui un inconvenient i sense preocupacions </p>
                <p>en la logística de les bicis</p>

            </div>

            <div class="container-bottom-home">

                <div class="subcontainer-bottom-home">

                    <img src="/images/Handshake.png" alt="Handshake" />
                    <h3>Comença i acaba la teva ruta des d'allà on vulguis</h3>
                    <p>Vetllem per la teva comoditat per tal de que tota l'exfursió sencera sigui un èxit assegurat</p>

                </div>

                <div class="subcontainer-bottom-home">

                    <img src="/images/Lightning.png" alt="Lightning" />
                    <h3>Bicicletes elèctriques MTB de les millors marques</h3>
                    <p>Garantim màxima qualitat i seguretat durant l'excursió amb les nostres bicis elèctriques de muntanya</p>

                </div>

                <div class="subcontainer-bottom-home">

                    <img src="/images/Camera.png" alt="Camera" />
                    <h3>Descobreix les nostres rutes i excursions</h3>
                    <p>No et perdis els racons que volem compartir amb tu. Un gran ventall d'opcions per a tots els gustos i nivells</p>
                    <p>Dóna un cop d'ull al nostre instagram per més fotos i videos: @emtbrenting</p>

                </div>

            </div>

            <iframe
                class="video"
                src="https://www.youtube.com/embed/pACrIPYPn6o"
                title="Vall de Lord"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>

            </iframe>

            <iframe
                class="video"
                src="https://www.youtube.com/embed/IlMrGG4qPgs"
                title="Vall de Lord nevada"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>

            </iframe>


        </div>
    )
}

export default Home