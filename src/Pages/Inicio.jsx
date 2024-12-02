import React from 'react'
import PrincipalPro from '../Components/PrincipalPro/PrincipalPro'
import './CSS/Inicio.css'
import Desplazamiento from '../Components/Desplazamiento/Desplazamiento'
import Modelaje from '../Components/Modelaje/Modelaje'


const Inicio = () => {
  return (
    <div className='inicio'>
      <PrincipalPro />
      <Desplazamiento />
      <Modelaje/>
    </div>
  )
}

export default Inicio