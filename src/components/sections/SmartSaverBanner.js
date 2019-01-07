import React from 'react'
import smartSaverBannerContent from '../../content/smartSaverBannerContent'
import './SmartSaverBanner.css'

const SmartSaverBanner = () => {
  const { title, subtitle, content } = smartSaverBannerContent
  return (
    <header className="SmartSaverBanner ColumnWithMobileImage">
      <div className="Banner__container">
        <div className="columns">
          <div className="column is-half Title__column">
            <div className="Title__header">
              <h1 className="title is-2">{title}</h1>
              <p className="subtitle is-4">{subtitle}</p>
            </div>
            <div className="Title__footer">
              <p className="subtitle is-5">{content}</p>
              <a href="/#claim" className="button" role="button">
                Show Me How
              </a>
            </div>
          </div>
          <div className="column is-half is-hidden-mobile ColumnWithImage" />
        </div>
      </div>
      <span className="Banner__overlay" />
    </header>
  )
}

export default SmartSaverBanner
