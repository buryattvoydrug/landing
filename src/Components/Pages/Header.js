import React, { useState } from 'react'
import Button from '../Button'

import '../../scss/Pages/Header.scss'
import Nav from '../Nav'
import { isMobile } from 'react-device-detect'

function Header({menu}) {
  
  return (
    <>
      <header>
        <div className="logo">
          <img src="/images/logo.png" alt="" className="logo__image"/>
          <span className="logo__text">ogo</span>
        </div>
        {(menu==='no')? null
        : <Nav/>}
        
      </header>
    </>
  )
}

export default Header
