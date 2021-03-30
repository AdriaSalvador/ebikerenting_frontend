import React from 'react'

import '../styles/Booking.css'

const Booking = (props) => {

    return (
        <div className="booking">

            <div className="booking-background">

                <img
                    className="bikes-img"
                    src="/images/Booking/Background_Booking.jpg"
                    alt="Mountain"
                />

            </div>

            <div className="container-top-booking">

                <h1>Preus</h1>
                <h3>El pagament s'efectuarà durant l'entrega de les bicicletes i s'haurà d'escanejar el DNI de cada ciclista i deixar una fiança. Es pot pagar en efectiu, targeta o bizum</h3>
                <hr id="hr-tittle" />
                <h4>2 hores<span>21€</span></h4>
                <hr />
                <h4>1/2 dia<span>25€</span></h4>
                <hr />
                <h4>1 dia<span>35€</span></h4>
                <hr />
                <h4>1 cap de setmana<span>48€</span></h4>
                <hr />
                <h4>Més opcions<span>- €</span></h4>

                <h1>Descomptes i extres</h1>
                <h3>Personalitza la teva experiència amb nosaltres i aprofita els nostres descomptes</h3>
                <hr id="hr-tittle" />
                <h4>Descompte de 4 bicis o més<span>5% de descompte</span></h4>
                <p>Ideal per les famílies i/o grups grans</p>
                <hr />
                <h4>Suplement de transport<span>Preu variable</span></h4>
                <p>Inclou el transport de les bicis des de la nostra seu a Sant Llorenç de Morunys</p>
                <p>El cost està especificat en cada ruta</p>
                <hr />
                <h4>Suplement de material<span>Preu variable</span></h4>
                <p>Candaus: 6€</p>
                <p>Casc: 3€</p>
                <p>Motxilla esportiva: 5€</p>
                <p>Ipad amb vídeo de la ruta i GPS: 9€</p>
                <hr />
                <h4>Suplement de guia<span>12€ per hora</span></h4>
                <p>Us podem ensenyar les nostres rutes en primera persona!</p>

                <h1>Fes la teva reserva per Whatsapp:<br/>(+34) 628227486</h1>
                
                <hr id="hr-tittle" />
                {/* <h3>Introdueix les teves dades i et respondrem tan aviat com ens sigui possible</h3> */}

                <p>A detalls de la reserva:</p>
                <ul class="booking-list">

                    <li>Data del lloguer (exemple: dia 24/05/2021 o del dia 6 al 8 de juny)</li>
                    <li>Nombre de bicis (especificar preferències de les nostres bicis)</li>
                    <li>Lloc i hora de sortida i arribada (aproximadament)</li>
                    <li>Sol·licitar informació de les nostres rutes (opció recomanable)</li>
                    <li>Qualsevol comentari i/o dubte que tinguis. T'escoltem!</li>

                </ul>

                {/* <form>
                    <label>Nom</label>
                    <input type="text"></input>

                    <br />

                    <label>Email</label>
                    <input type="text"></input>
                    
                    <br />
                    
                    <label>Número de telèfon</label>
                    <input type="text"></input>

                    <br />

                    <label>Detalls de la reserva</label>
                    <textarea id="comment" name="comment" rows="4" cols="33"></textarea>

                    <br />

                    <input type="button" value="Fes la teva reserva!"></input>
                </form> */}

            </div>

        </div>
    )
}

export default Booking