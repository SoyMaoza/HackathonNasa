import React from 'react';
import './Desplazamiento.css';
import { Link } from "react-router-dom"
import Jupiter from '../Imagenes/Jupiter.jpg'
import Marte from '../Imagenes/Marte.jpg'
import Mercurio from '../Imagenes/Mercurio.jpg'
import Tierra from '../Imagenes/Tierra.jpg'
import Urano from '../Imagenes/Urano.jpg'
import Venus from '../Imagenes/Venus.jpg'
import Sun from '../Imagenes/Sun.jpg'
import Saturno from '../Imagenes/Saturno.jpg'
import Neptuno from '../Imagenes/Neptuno.jpg'



const Desplazamiento = () => {
    return (
        <div>
            <div className="planetas">
                <section>
                    <img src={Sun} alt="Sol" />
                    <img src={Mercurio} alt="Mercurio" />
                    <img src={Venus} alt="Venus" />
                    <img src={Tierra} alt="Tierra" />
                    <img src={Marte} alt="Marte" />
                    <img src={Jupiter} alt="Júpiter" />
                    <img src={Saturno} alt="Saturno" />
                    <img src={Urano} alt="Urano" />
                    <img src={Neptuno} alt="Neptuno" />
                </section>
            </div>

        </div>
    );
};

export default Desplazamiento;
