import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className='login'>
        <div className="top">
            <div className="wrapper">
        <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            />
            </div>
        </div>
        <div className="container">
        <form>
          <h1>Sign in</h1>
          <input type="email" name="" id="" placeholder='Email or Phone number' />
          <input type="password" name="" id="" placeholder='Password' />
          <button className="loginPutton">Sign in</button>
          <span className='alignCentre'>New to Netflix? <strong>Sign up now</strong></span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <b>Learn more</b>.
          </small>
        </form>
        </div>
    </div>
  )
}
