import React from 'react'

import '../scss/Button.scss'

function Button({type}) {
  return (
    <button className={type? type+"__button" + " button" : "button"}>Get In Touch</button>
  )
}

export default Button
