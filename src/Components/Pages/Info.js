import React from 'react'
import Fade from 'react-reveal/Fade';

import '../../scss/Pages/Info.scss'

function Info() {
  return (
    <>
      <div className="container">
        <section className="info" id="info">
          <h2 className="info__title"><Fade top cascade>The best design for your studio website</Fade></h2>
          <Fade right>
            <div className="info__text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </Fade>
          <Fade right cascade>
            <div className="info-block">
              <div className="info__item">
                <img src="/images/icon1.png" alt="" className="info__item__icon"/>
                <div className="info__item__block">
                  <h4 className="item__title">Design concept</h4>
                  <span className="item__text">Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper. </span>
                </div>
              </div>

              <div className="info__item">
                <img src="/images/icon2.png" alt="" className="info__item__icon"/>
                <div className="info__item__block">
                  <h4 className="item__title">Developing websites</h4>
                  <span className="item__text">Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper. </span>
                </div>
              </div>
              <div className="info__item">
                <img src="/images/icon2.png" alt="" className="info__item__icon"/>
                <div className="info__item__block">
                  <h4 className="item__title">Developing websites</h4>
                  <span className="item__text">Vitae nulla euismod velpretium tellus accumsan nulla nunc euismod ve semper. Vitae nulla euismod velpretium tellus accumsan nulla nunc euismod ve semper. Vitae nulla euismod velpretium tellus accumsan nulla nunc euismod ve semper. </span>
                </div>
              </div>
            </div>
          </Fade>
        </section>
      </div>
    </>
  )
}

export default Info
