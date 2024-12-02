import React from 'react';
import './Modelaje.css';
import Jupiter from '../Imagenes/Jupiter.glb';
import Marte from '../Imagenes/Marte.glb';
import Mercurio from '../Imagenes/Mercurio.glb';
import Neptuno from '../Imagenes/Neptuno.glb';
import Saturno from '../Imagenes/Saturno.glb';
import Venus from '../Imagenes/Venus.glb';
import Tierra from '../Imagenes/Tierra.glb';
import Urano from '../Imagenes/Urano.glb';
import Sol from '../Imagenes/Sol.glb';

const Modelaje = () => {
    return (
        <div className='planetas-modelado'>
            <div className="planeta">
                <model-viewer src={Sol}
                    alt="No se mostró la imagen" 
                    auto-rotate 
                    camera-controls 
                    style={{ width: '100%', height: '500px' }}>
                </model-viewer>
                <div className="contenedor-img">
                    <h3 style={{ color: 'white' }}>
                        <span>Diámetro:</span><br />1,391,000 km
                        <br />
                        <span>Distancia desde la Tierra:</span><br />Aproximadamente 149.6 millones de km (1 unidad astronómica).
                        <br />
                        <span>Masa:</span><br />1.99 x 10²⁹ kg
                        <br />
                        <span>Densidad:</span><br />1.41 g/cm³
                        <br />
                        <span>Superficie:</span><br />Compuesta de plasma, con una atmósfera que incluye la fotosfera (capa visible), 
                        la cromosfera y la corona, con temperaturas que varían de aproximadamente 5,500 °C en la superficie a millones de grados en la corona.
                    </h3>
                </div>
            </div>

            <div className="planeta">
                <model-viewer src={Mercurio} 
                    alt="No se mostró la imagen" 
                    auto-rotate 
                    camera-controls 
                    style={{ width: '100%', height: '500px' }}>
                </model-viewer>
                <div className="contenedor-img">
                    <h3 style={{ color: 'white' }}>
                        <span>Diámetro:</span><br /> 4,880 km
                        <br />
                        <span>Distancia desde la Tierra:</span><br /> Varía entre 77 y 222 millones de km (promedio de 91.7 millones de km).
                        <br />
                        <span>Masa:</span><br /> 3.30 x 10²³ kg
                        <br />
                        <span>Densidad:</span><br /> 5.427 g/cm³
                        <br />
                        <span>Superficie:</span><br /> Rocosa, con cráteres, planicies y escarpes.
                    </h3>
                </div>
            </div>

            <div className="planeta">
                <model-viewer src={Venus} 
                    alt="No se mostró la imagen" 
                    auto-rotate 
                    camera-controls 
                    style={{ width: '100%', height: '500px' }}>
                </model-viewer>
                <div className="contenedor-img">
                    <h3 style={{ color: 'white' }}>
                        <span>Diámetro:</span><br /> 12,104 km
                        <br />
                        <span>Distancia desde la Tierra:</span><br />Varía entre 38 y 261 millones de km (promedio de 41.4 millones de km).
                        <br />
                        <span>Masa:</span><br />4.87 x 10²⁴ kg
                        <br />
                        <span>Densidad:</span><br />5.243 g/cm³
                        <br />
                        <span>Superficie:</span><br />Rocosa y cubierta por volcanes, con una atmósfera densa y cálida compuesta principalmente de dióxido de carbono.
                    </h3>
                </div>
            </div>

            <div className="planeta">
                <model-viewer src={Tierra} 
                    alt="No se mostró la imagen" 
                    auto-rotate 
                    camera-controls 
                    style={{ width: '100%', height: '500px' }}>
                </model-viewer>
                <div className="contenedor-img">
                    <h3 style={{ color: 'white' }}>
                        <span>Diámetro:</span><br />12,742 km
                        <br />
                        <span>Masa:</span><br />5.97 x 10²⁴ kg
                        <br />
                        <span>Densidad:</span><br />5.515 g/cm³
                        <br />
                        <span>Superficie:</span><br /> Aproximadamente 510.1 millones de km², compuesta por océanos, continentes y hielo.
                    </h3>
                </div>
            </div>

            <div className="planeta">
                <model-viewer src={Marte} 
                    alt="No se mostró la imagen" 
                    auto-rotate 
                    camera-controls 
                    style={{ width: '100%', height: '500px' }}>
                </model-viewer>
                <div className="contenedor-img">
                    <h3 style={{ color: 'white' }}>
                        <span>Diámetro:</span><br />6,779 km
                        <br />
                        <span>Distancia desde la Tierra:</span><br />Varía entre 54.6 y 401 millones de km (promedio de 225 millones de km).
                        <br />
                        <span>Masa:</span><br />6.42 x 10²³ kg
                        <br />
                        <span>Densidad:</span><br />3.933 g/cm³
                        <br />
                        <span>Superficie:</span><br />Rocosa, con volcanes, valles, cráteres y casquetes polares de hielo.
                    </h3>
                </div>
            </div>

            <div className="planeta">
                <model-viewer src={Jupiter} 
                    alt="No se mostró la imagen" 
                    auto-rotate 
                    camera-controls 
                    style={{ width: '100%', height: '500px' }}>
                </model-viewer>
                <div className="contenedor-img">
                    <h3 style={{ color: 'white' }}>
                        <span>Diámetro:</span><br />139,820 km
                        <br />
                        <span>Distancia desde la Tierra:</span><br />Varía entre 588 y 968 millones de km (promedio de 778 millones de km).
                        <br />
                        <span>Masa:</span><br />1.90 x 10²⁷ kg
                        <br />
                        <span>Densidad:</span><br />1.33 g/cm³
                        <br />
                        <span>Superficie:</span><br />Principalmente gaseosa, con una atmósfera densa de hidrógeno y helio, 
                        además de características como bandas de nubes y la Gran Mancha Roja.
                    </h3>
                </div>
            </div>

            <div className="planeta">
                <model-viewer src={Saturno} 
                    alt="No se mostró la imagen" 
                    auto-rotate 
                    camera-controls 
                    style={{ width: '100%', height: '500px' }}>
                </model-viewer>
                <div className="contenedor-img">
                    <h3 style={{ color: 'white' }}>
                        <span>Diámetro:</span><br />116,460 km
                        <br />
                        <span>Distancia desde la Tierra:</span><br />Varía entre 1.2 y 1.7 mil millones de km (promedio de 1.4 mil millones de km).
                        <br />
                        <span>Masa:</span><br />5.68 x 10²⁶ kg
                        <br />
                        <span>Densidad:</span><br />0.687 g/cm³ (es menos denso que el agua)
                        <br />
                        <span>Superficie:</span><br />Principalmente gaseosa, compuesta principalmente de hidrógeno y helio, 
                        con un sistema de anillos distintivo.
                    </h3>
                </div>
            </div>

            <div className="planeta">
                <model-viewer src={Urano} 
                    alt="No se mostró la imagen" 
                    auto-rotate 
                    camera-controls 
                    style={{ width: '100%', height: '500px' }}>
                </model-viewer>
                <div className="contenedor-img">
                    <h3 style={{ color: 'white' }}>
                        <span>Diámetro:</span><br />50,724 km
                        <br />
                        <span>Distancia desde la Tierra:</span><br />Varía entre 2.57 y 3 mil millones de km (promedio de 2.87 mil millones de km).
                        <br />
                        <span>Masa:</span><br />8.68 x 10²⁵ kg
                        <br />
                        <span>Densidad:</span><br />1.27 g/cm³
                        <br />
                        <span>Superficie:</span><br />Gaseosa, con una atmósfera rica en hidrógeno, helio y metano, que le da su color azul verdoso.
                    </h3>
                </div>
            </div>

            <div className="planeta">
                <model-viewer src={Neptuno} 
                    alt="No se mostró la imagen" 
                    auto-rotate 
                    camera-controls 
                    style={{ width: '100%', height: '500px' }}>
                </model-viewer>
                <div className="contenedor-img">
                    <h3 style={{ color: 'white' }}>
                        <span>Diámetro:</span><br />49,244 km
                        <br />
                        <span>Distancia desde la Tierra:</span><br />Varía entre 4.3 y 4.7 mil millones de km (promedio de 4.5 mil millones de km).
                        <br />
                        <span>Masa:</span><br />1.02 x 10²⁶ kg
                        <br />
                        <span>Densidad:</span><br />1.64 g/cm³
                        <br />
                        <span>Superficie:</span><br />Principalmente gaseosa, con una atmósfera compuesta de hidrógeno, helio y metano.
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Modelaje;
