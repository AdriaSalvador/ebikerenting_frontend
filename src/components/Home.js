import React from 'react'

import '../styles/Home.css'

const Home = (props) => {

    return (
        <div className="home">

            <div className="home-background">

                <img
                    className="home-img"
                    src="/images/Home/Background_Mountain.jpg"
                    alt="Home Mountain"
                />

            </div>

            <div className="container-top-home">

                <h1>Lloguer de bicicletes elèctriques MTB</h1>
                <hr />
                <p>Volem oferir una nova manera de descobrir la muntanya i l'entorn</p>
                <br />
                <p>Al ritme de cadascú, sense horaris, sense que el relleu sigui un inconvenient i sense preocupacions </p>
                <p>en la logística de les bicis</p>

            </div>

            <div className="container-bottom-home">

                <div className="subcontainer-bottom-home">

                    <img src="/images/Home/Handshake.png" alt="Handshake" />
                    <h3>Comença i acaba la teva ruta des d'allà on vulguis</h3>
                    <p>Vetllem per la teva comoditat per tal de que tota l'exfursió sencera sigui un èxit assegurat</p>

                </div>

                <div className="subcontainer-bottom-home">

                    <img src="/images/Home/Lightning.png" alt="Lightning" />
                    <h3>Bicicletes elèctriques MTB de les millors marques</h3>
                    <p>Garantim màxima qualitat i seguretat durant l'excursió amb les nostres bicis elèctriques de muntanya</p>

                </div>

                <div className="subcontainer-bottom-home">

                    <img src="/images/Home/Camera.png" alt="Camera" />
                    <h4>Descobreix les nostres rutes i excursions</h4>
                    <p>No et perdis els racons que volem compartir amb tu. Un gran ventall d'opcions per a tots els gustos i nivells</p>
                    <p>Dóna un cop d'ull al nostre instagram per més fotos i videos: @emtbrenting</p>

                </div>

            </div>

            <iframe
                className="video"
                src="https://www.youtube.com/embed/pACrIPYPn6o"
                title="Vall de Lord"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>

            </iframe>

            <iframe
                className="video"
                src="https://www.youtube.com/embed/IlMrGG4qPgs"
                title="Vall de Lord nevada"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>

            </iframe>


        </div>
    )
}

export default Home