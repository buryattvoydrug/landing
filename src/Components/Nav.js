import React, { useState } from 'react'
import Button from './Button'
import {Link} from 'react-scroll';
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
          <Link to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500} onClick={closeMenu} className="nav__item">Home</Link>
          <Link to="info"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500} onClick={closeMenu} className="nav__item">Templates</Link>
          <Link to="team"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500} onClick={closeMenu} className="nav__item">Team</Link>
          <Link to="cta"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500} onClick={closeMenu} className="nav__item">Help</Link>
          <Button onClick={closeMenu} type={'header'}/>
      </nav> : null}
    </>
  )
}

export default Nav
