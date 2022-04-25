import React from 'react'
import './Footer.scss'
import bg from '../../assets/footer-bg.jpg'
import logo from '../../assets/logo.png'

import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Footer = () => {
  return (
    <div className='footer' style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer-content container">
        <div className="footer-content-logo">
          <div className="logo">
            <img src={logo} alt="logo" />
            <Link to='/'>MOVIEFLIX</Link>
          </div>
        </div>

        <div className="footer-content-menus">
          <div className="footer-content-menu">
            <Link to='/'>Home</Link>
            <Link to='/'>Contact us</Link>
            <Link to='/'>Term of services</Link>
            <Link to='/'>About us</Link>
          </div>

          <div className="footer-content-menu">
            <Link to='/'>Live</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Premium</Link>
            <Link to='/'>Privacy policy</Link>
          </div>

          <div className="footer-content-menu">
            <Link to='/'>You must watch</Link>
            <Link to='/'>Recent release</Link>
            <Link to='/'>Top IMBD</Link>
           
          </div>

        </div>
      </div>

      

    </div>
  )
}

export default Footer