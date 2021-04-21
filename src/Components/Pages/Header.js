import React, { useState } from 'react'
import Button from '../Button'

import '../../scss/Pages/Header.scss'
import Nav from '../Nav'

function Header() {
  
  return (
    <>
      <header>
        <div className="logo">
          <img src="/images/logo.png" alt="" className="logo__image"/>
          <span className="logo__text">ogo</span>
        </div>
        <Nav/>
      </header>
    </>
  )
}

export default Header
