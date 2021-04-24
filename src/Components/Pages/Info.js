import React from 'react'
import Fade from 'react-reveal/Fade';

import info from '../../data/info.json'

import '../../scss/Pages/Info.scss'

function Info() {
  return (
    <>
      <div className="container">
        <section className="info" id="info">
          <h2 className="info__title"><Fade top cascade>{info.items[0].title}</Fade></h2>
          <Fade right>
            <div className="info__text">
            {info.items[0].text}
            </div>
          </Fade>
          <Fade right cascade>
            <div className="info-block">
              <div className="info__item">
                <img src={info.items[1].image} alt="" className="info__item__icon"/>
                <div className="info__item__block">
                  <h4 className="item__title">{info.items[1].title}</h4>
                  <span className="item__text">Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper. </span>
                </div>
              </div>

              <div className="info__item">
                <img src={info.items[2].image} alt="" className="info__item__icon"/>
                <div className="info__item__block">
                  <h4 className="item__title">{info.items[2].title}</h4>
                  <span className="item__text">{info.items[2].text}</span>
                </div>
              </div>
              <div className="info__item">
                <img src={info.items[3].image} alt="" className="info__item__icon"/>
                <div className="info__item__block">
                  <h4 className="item__title">{info.items[3].title}</h4>
                  <span className="item__text">{info.items[3].text} </span>
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
