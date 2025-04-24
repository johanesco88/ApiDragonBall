import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div id='contenedor'>
            <h1>API Dragon Ball Z</h1>
            <p>Backend: <a href="https://github.com/johanesco88" rel="noopener noreferrer">Johan Stiven Escobar</a></p>
            <p>Frontend: <a href="https://github.com/AlejandroAnturyZ"target="_blank" rel="noopener noreferrer">Alejandro Antury Zambrano</a></p>
            <p>Florencia - Caquetá - Colombia</p>
            <p>© Universidad de la Amazonia 2025</p>
        </div>
        <img id='logo_goku' src="https://ih1.redbubble.net/image.3589504790.7460/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="" />
    </footer>
  )
}

export default Footer