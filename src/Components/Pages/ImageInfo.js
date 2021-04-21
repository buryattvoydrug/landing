import React from 'react'

import '../../scss/Pages/ImageInfo.scss'

function ImageInfo() {
  return (
    <>
      <div className="container">
        <section className="image-info">
          <div className="image-info-head">
            <h2 className="image-info__title">The best design for your studio website</h2>
            <div className="image-info__text">
              Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada duis volutpat.
            </div>
          </div>
          <div className="image-info-image">
            <img src="/images/image1.jpg" alt="" className="image-info__image"/>
          </div>
        </section>
      </div>
    </>
  )
}

export default ImageInfo
