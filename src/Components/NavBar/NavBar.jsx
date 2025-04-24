import React from 'react'
import './NavBar.css'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <ul>
        <li><Link className='Opcion' to={"/"}>Home</Link></li>
        <li><Link className='Opcion' to={"/filter/Male"}>Masculino</Link></li>
        <li><Link className='Opcion' to={"/filter/Female"}>Femenino</Link></li>
        <li><Link className='Opcion' to={"/AcercaDePage"}>Acerca de</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar