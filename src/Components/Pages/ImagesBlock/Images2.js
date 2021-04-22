import React from 'react'

import '../../../scss/Pages/Images.scss'

function Images2() {
  return (
    <>
    <div className="container">
      <section className="images images2">
        <div className="images-head">
            <h2 className="images__title">Requirements gathering and analysis for references.</h2>
            <div className="images__text">
            Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. 
            </div>
        </div>
        <img src="/images/image4.jpg" alt="" className="images__image "/>
        <img src="/images/image3.jpg" alt="" className="images__image tall__image"/>
      </section>
    </div>
    </>
  )
}

export default Images2
