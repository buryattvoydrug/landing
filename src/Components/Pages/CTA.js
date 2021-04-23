import React from 'react'
import Button from '../Button'
import Fade from 'react-reveal/Fade';

import '../../scss/Pages/CTA.scss'

function CTA() {
  return (
    <>
      <div className="container">
      <Fade right>
        <section className="cta" id="cta">
          <div className="cta-block">
            <h3 className="cta__title">All-in-one platform for business </h3>
            <div className="cta__text">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. </div>
          </div>
          <Button/>
        </section>
      </Fade>
      </div>
    </>
  )
}

export default CTA
