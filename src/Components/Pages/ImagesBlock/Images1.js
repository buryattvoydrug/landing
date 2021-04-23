import React from 'react'
import Fade from 'react-reveal/Fade';

import '../../../scss/Pages/Images.scss'

function Images1() {
  return (
    <>
    <div className="container">
      <section className="images images1">
        <div className="images-head">
          <Fade right cascade>
              <h2 className="images__title">Requirements gathering and analysis for references.</h2>
              <div className="images__text">
              Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. 
              </div>
          </Fade>
        </div>
        <Fade right>
          <img src="/images/image4.jpg" alt="" className="images__image"/>
        </Fade>
      </section>
    </div>
    </>
  )
}

export default Images1
