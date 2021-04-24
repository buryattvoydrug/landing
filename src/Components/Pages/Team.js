import React from 'react'
import Carousel from 'react-elastic-carousel'
import { isMobile } from 'react-device-detect'
import Fade from 'react-reveal/Fade';

import team from '../../data/team.json'

import '../../scss/Pages/Team.scss'

function Team() {

  const teamItems = team.items.map((n,i)=>(
    <div className="team__item" key={i}>
              <img src={team.items[i].image} alt="" className="team__image"/>
              <h4 className="team__name">{team.items[i].name}</h4>
              <h5 className="team__titul">{team.items[i].subtitle}</h5>
            </div>
  ))

  return (
    <>
      <div className="container">
        <section className="team" id="team">
          <div className="team-head">
            <Fade right cascade>
              <h2 className="team__title">The best design for your studio website</h2>
              <div className="team__text">
                Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada duis volutpat.
              </div>
            </Fade>
          </div>
          {isMobile?
          <Carousel enableAutoPlay showArrows={false} autoPlaySpeed={2500} itemsToShow={1} pagination={false} className="team-block">
            
            {teamItems}
          </Carousel>
          : 
          <>
          <Fade right cascade>
          <div className="team-block">
            {teamItems}
          </div>
          </Fade>
          </>}
        </section>
      </div>
    </>
  )
}

export default Team
