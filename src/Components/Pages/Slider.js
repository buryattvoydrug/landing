import React from 'react'
import Fade from 'react-reveal/Fade';
import Carousel,{ consts } from 'react-elastic-carousel'
import { isMobile } from 'react-device-detect'

import slider from '../../data/slider.json'

import '../../scss/Pages/Slider.scss'
import '../../scss/Pages/Carousel.scss'


class Slider extends React.Component{
  myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? <img src="images/arrow-left.svg" alt=""/> :
    <img src="images/arrow-right.svg" alt=""/>
    const pointerClass = type === consts.PREV ? 'left': 'right'
    return (
      <button onClick={onClick} disabled={isEdge} className={pointerClass+"-arrow arrow"}>
        {pointer}
      </button>
    )
  }
  render(){

  const slides = slider.items.map((n,i)=>(
    <div className="carousel__item" key={i}>
        <h4 className="carousel__item__title">{slider.items[i].title}</h4>
        <div className="carousel__item__text">
        {slider.items[i].text}
        </div>
        <a href={slider.items[i].linkUrl} className="carousel__item__link">{slider.items[i].linkText}</a>
      </div>
  ))
  return (
      <div className="container">
        <div className="slider">
          <h2 className="slider__title"><Fade top cascade>The best design for your studio website</Fade></h2>
          <div className="carousel-block">
            <Carousel className="carousel" renderArrow={this.myArrow} itemsToShow={isMobile? 1 : 3} pagination={false}>
                {slides}
                    
              
              
            </Carousel>
          </div>
        </div>
      </div>
  )
}}

export default Slider
