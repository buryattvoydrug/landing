import React from 'react'
import Nav from '../Nav'

import '../../scss/Pages/Header.scss'

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
