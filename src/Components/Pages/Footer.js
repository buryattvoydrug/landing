import React from 'react'
import Nav from '../Nav'
import Header from './Header'

import '../../scss/Pages/Footer.scss'
import { isMobile } from 'react-device-detect'

function Footer() {
  return (
    <>
    <footer>
      <Header menu={isMobile? 'no': 'yes'}/>
      <div className="footer-bottom">
        <span className="copyright">©2021 igor.radimov</span>
        <span className="footer__text">The best design for your web studio website. Vitae nulla nunc euismod vel pretium tellus accumsan semper. Vitae nulla nunc euismod vel pretium tellus accumsan semper.</span>
      </div>
    </footer>
    </>
  )
}

export default Footer
