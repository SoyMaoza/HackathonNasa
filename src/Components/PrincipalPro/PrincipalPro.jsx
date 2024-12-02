import React from 'react'
import './PrincipalPro.css'
const PrincipalPro = () => {
    return (
        <div className='principal'>
            <div className='info'>
                <h1>Navegador Del Observatorio De Mundos Habitables</h1>
                <p>
                    ¿Qué exoplanetas serán observables con el futuro Observatorio de Mundos Habitables (HWO)?
                    Una forma de determinar los objetivos exoplanetarios más interesantes para el HWO sería
                    visualizar cuáles de los exoplanetas conocidos actualmente podría observar el HWO. Su
                    desafío es desarrollar una aplicación que permita a los usuarios visualizar las rutas de
                    observación a través de nuestra galaxia hacia los exoplanetas conocidos en el vecindario
                    solar en función de su potencial para ser caracterizados por el HWO.
                </p>
            </div>
            <div className='imagen-planetario'>
                <img src='https://assets.spaceappschallenge.org/media/images/NASA_Space_Apps_2024_Challenge_4.2e16d0ba.fill-300x250.jpg' alt="" />
            </div>


        </div>

    )
}

export default PrincipalPro