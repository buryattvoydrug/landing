import React from 'react'
import Fade from 'react-reveal/Fade';
import Carousel,{ consts } from 'react-elastic-carousel'

import '../../scss/Pages/Slider.scss'
import '../../scss/Pages/Carousel.scss'
import { isMobile } from 'react-device-detect'

class Slider extends React.Component{
  myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? <img src="/images/arrow-left.svg" alt=""/> :
    <img src="/images/arrow-right.svg" alt=""/>
    const pointerClass = type === consts.PREV ? 'left': 'right'
    return (
      <button onClick={onClick} disabled={isEdge} className={pointerClass+"-arrow arrow"}>
        {pointer}
      </button>
    )
  }
  render(){
  return (
      <div className="container">
        <div className="slider">
          <h2 className="slider__title"><Fade top cascade>The best design for your studio website</Fade></h2>
          <div className="carousel-block">
            <Carousel className="carousel" renderArrow={this.myArrow} itemsToShow={isMobile? 1 : 3} pagination={false}>
              <div className="carousel__item">
                <h4 className="carousel__item__title">Name</h4>
                <div className="carousel__item__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. 
                  Ac aliquam ac volutpat, viverra magna risus. 
                </div>
                <a href="/" className="carousel__item__link">Experienced team</a>
              </div>
              <div className="carousel__item">
                <h4 className="carousel__item__title">Name</h4>
                <div className="carousel__item__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. 
                  Ac aliquam ac volutpat, viverra magna risus. 
                </div>
                <a href="/" className="carousel__item__link">Experienced team</a>
              </div>
              <div className="carousel__item">
                <h4 className="carousel__item__title">Name</h4>
                <div className="carousel__item__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. 
                  Ac aliquam ac volutpat, viverra magna risus. 
                </div>
                <a href="/" className="carousel__item__link">Experienced team</a>
              </div>
              <div className="carousel__item">
                <h4 className="carousel__item__title">Name</h4>
                <div className="carousel__item__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. 
                  Ac aliquam ac volutpat, viverra magna risus. 
                </div>
                <a href="/" className="carousel__item__link">Experienced team</a>
              </div>
              <div className="carousel__item">
                <h4 className="carousel__item__title">Name</h4>
                <div className="carousel__item__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. 
                  Ac aliquam ac volutpat, viverra magna risus. 
                </div>
                <a href="/" className="carousel__item__link">Experienced team</a>
              </div>
              <div className="carousel__item">
                <h4 className="carousel__item__title">Name</h4>
                <div className="carousel__item__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. 
                  Ac aliquam ac volutpat, viverra magna risus. 
                </div>
                <a href="/" className="carousel__item__link">Experienced team</a>
              </div>
              <div className="carousel__item">
                <h4 className="carousel__item__title">Name</h4>
                <div className="carousel__item__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. 
                  Ac aliquam ac volutpat, viverra magna risus. 
                </div>
                <a href="/" className="carousel__item__link">Experienced team</a>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
  )
}}

export default Slider
