import React from 'react'
import bg from '../../assets/login-bg.png'
import logo from '../../assets/logo.png';

import Button, { OutlineButton } from '../button/Button';


import './LoginPage.scss'

const LoginPage = ({ setLogin }) => {

  return (
    <div style={{ backgroundImage: `url(${bg})` }} className='login-page'>
      <div className="logo">
        <img src={logo} alt="" />
        <a href="#">MOVIEFLIX</a>
      </div>

      <Button className='small' onClick={(e) => {
        setLogin('true')
        localStorage.setItem('set', 'true');
      }}>
        Login
      </Button>

      <div className='sign-up'>
      <div className='larg'>
        Unlimited movies, TV shows and more at ₹145 per month.
      </div>
      <div className='mid'>
        Watch Anytime, Anywhere
      </div>
      <div className='mid'>
        Please enter your email here to sign up...
      </div>

      <input type="text" placeholder='Email' className='input'/>
      <OutlineButton className='small'>Sign-up</OutlineButton>
      </div>
    </div>
  )
}

export default LoginPage