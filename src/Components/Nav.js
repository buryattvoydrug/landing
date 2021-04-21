import React, { useState } from 'react'
import Button from './Button'
import { isMobile } from 'react-device-detect'

import '../scss/Pages/Header.scss'

function Nav() {
  const [active,setActive]=useState(0)
  const [menu,setMenu]=useState(false)
  const toggleMenu=()=>{
    setMenu(!menu);
    if (document.body.style.overflowY !== "hidden") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }
  const closeMenu = () => {
    setMenu(false);
    document.body.style.overflowY = "scroll";
  }
  return (
    <>
      {isMobile? 
        <>
          <button onClick={toggleMenu} className="menu__button">
            <img src="/images/close.png" alt=""/>
          </button>
        </>
        : null}
      {(menu || !isMobile)? <nav>
          <div onClick={closeMenu} className="nav__item">Home</div>
          <div onClick={closeMenu} className="nav__item">Templates</div>
          <div onClick={closeMenu} className="nav__item">Team</div>
          <div onClick={closeMenu} className="nav__item">Help</div>
          <Button onClick={closeMenu} type={'header'}/>
      </nav> : null}
    </>
  )
}

export default Nav
