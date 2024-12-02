import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      
        <ul>
            <li><Link style={{textDecoration:'none', color:"white", fontSize:"25px"}} to="/">Inicio</Link></li>
            <li><Link style={{textDecoration:'none', color:"white", fontSize:"25px"}} to="/exoplanetas">Tablas de exoplanetas</Link></li>
            <li><Link style={{textDecoration:'none', color:"white", fontSize:"25px"}} to ="/contribuyentes">Contribuyentes</Link></li>
            <li><a href="https://elaborate-brigadeiros-2c0ba9.netlify.app/#load=&lookat=SSB&interval=3&eclipticgrid=false&" target="_blank" style={{textDecoration:'none', color:"white", fontSize:"25px"}}>Sistema Solar 3D</a></li>
        </ul>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/110px-NASA_logo.svg.png" alt="" />


    </div>
  )
}

export default Navbar