import React from 'react'
import {Link} from 'react-scroll';

import '../scss/Button.scss'

function Button({type}) {
  return (
    <Link to="info"
    spy={true}
    smooth={true}
    offset={0}
    duration= {500} className={type? type+"__button" + " button" : "button"}>Get In Touch</Link>
  )
}

export default Button
