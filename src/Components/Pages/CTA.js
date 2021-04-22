import React from 'react'
import Button from '../Button'

import '../../scss/Pages/CTA.scss'

function CTA() {
  return (
    <>
      <div className="container">
        <section className="cta">
          <div className="cta-block">
            <h3 className="cta__title">All-in-one platform for business </h3>
            <div className="cta__text">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. </div>
          </div>
          <Button/>
        </section>
      </div>
    </>
  )
}

export default CTA
