import React from 'react'
import './login.css'
import { loginUri } from './spot'
import logo from '../asset/spotify.png'
function Login() {
    const redirectUri='http://localhost:3000/'
  return (
    <div className='login'>
        <img src={logo} alt='img'/>
        <a href={loginUri}>login</a>
    </div>
  )
}

export default Login