import React from 'react'
import './smartSaverBanner.css'

const SmartSaverBanner = () => {
  return (
    <header className="SmartSaverBanner ColumnWithMobileImage">
      <div className="Banner__container">
        <div className="columns">
          <div className="column is-half Title__column">
            <div className="Title__header">
              <h1 className="title is-2">
                Education is the key to brighter future.
              </h1>
              <p className="subtitle is-4">
                Sending your child to higher education can be expensive.
              </p>
            </div>
            <div className="Title__footer">
              <p className="subtitle is-5">
                There are two things you can do now to help your child to reach
                their potential (without costing you a dime!)
              </p>
              <a href="/#" className="button" role="button">
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
