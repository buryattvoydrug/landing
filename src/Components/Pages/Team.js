import React from 'react'

import '../../scss/Pages/Team.scss'

function Team() {
  return (
    <>
      <div className="container">
        <section className="team">
          <div className="team-head">
            <h2 className="team__title">The best design for your studio website</h2>
            <div className="team__text">
              Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada duis volutpat.
            </div>
          </div>
          <div className="team-block">
            <div className="team__item">
              <img src="/images/team1.jpg" alt="" className="team__image"/>
              <h4 className="team__name">Andry Ford</h4>
              <h5 className="team__titul">CEO at Whatever</h5>
            </div>
            <div className="team__item">
              <img src="/images/team1.jpg" alt="" className="team__image"/>
              <h4 className="team__name">Andry Ford</h4>
              <h5 className="team__titul">CEO at Whatever</h5>
            </div>
            <div className="team__item">
              <img src="/images/team1.jpg" alt="" className="team__image"/>
              <h4 className="team__name">Andry Ford</h4>
              <h5 className="team__titul">CEO at Whatever</h5>
            </div>
            <div className="team__item">
              <img src="/images/team1.jpg" alt="" className="team__image"/>
              <h4 className="team__name">Andry Ford</h4>
              <h5 className="team__titul">CEO at Whatever</h5>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Team
