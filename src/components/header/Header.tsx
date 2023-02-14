import React, { useState } from 'react'
import './Header.css'
const Header = () => {

  return (
    <header className="header">
        <nav className="nav container">
            <a href="#home">Taverna 28</a>
            <div className="nav__menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                </ul>
                <ul>
                    <li><a href="#sobre">Sobre</a></li>
                </ul>
                <ul>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>
                <ul>
                    <li><a href="#onde">Onde nos encontrar</a></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header
