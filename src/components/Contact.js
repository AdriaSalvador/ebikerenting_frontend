import React from 'react'

import '../styles/Contact.css'

const Contact = (props) => {

    return (
        <div class="contact">

            <div class="contact-background">

                <img
                    class="contact-img"
                    src="/images/Contact/Background_Contact.png"
                    alt="Mountain Map"
                />

            </div>

            <div class="container-top-contact">

                <h1>Contacte</h1>
                <hr />
                <p>Visita el nostre <span class="span-contact">instagram</span> per veure més contingut audiovisual de les bicicletes i les rutes i participa als nostres sortejos!</p>

            </div>

            <div class="container-bottom-contact">

                <div class="text-image-contact">

                    <img
                        src="/images/Contact/Instagram_Valldelord.png"
                        alt="instagram"
                    />

                    <div class="text-description-contact">

                        <p><span class="span-ride">Sant Llorenç de Morunys</span></p>
                        <p>Crta. Berga 2, 25282 Sant Llorenç de Morunys</p>
                        <p><span class="span-ride">Telèfon de contacte</span></p>
                        <p>(+34) 628 22 74 86</p>
                        <p><span class="span-ride">Email</span></p>
                        <p>josepferrergarriga6@gmail.com</p>
                        <p><span class="span-ride">Instagram</span></p>
                        <p>@ebikevalldelord</p>


                    </div>

                </div>

                {/* Aqui va el mapa?¿ */}

            </div>

        </div>
    )
}

export default Contact