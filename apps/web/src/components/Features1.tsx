"use client";

import React, { useState } from 'react'
import PropTypes from 'prop-types'

interface Features1Props {
  feature2ImgAlt: string
  upcomingEvents: string
  feature1ImgAlt: string
  feature1ImgSrc: string
  feature3Title: string
  descriptionUpcomingEvents: string
  feature2ImgSrc: string
  feature3ImgAlt: string
  descriptionCreateEvents: string
  feature3ImgSrc: string
  feature3Description: string
}

const Features1 = (props: Features1Props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding">
        <div className="features1-container1 thq-section-max-width">
          <div className="features1-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={`/images/c6.jpg`}
                className="features1-image thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature2ImgAlt}
                src={`/images/c7.jpg`}
                className="features1-image1 thq-img-ratio-16-9"
              />
            )}
          </div>
          <div className="features1-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features1-tab-horizontal"
            >
              <div className="features1-divider-container">
                {activeTab === 0 && (
                  <div className="features1-container2"></div>
                )}
              </div>
              <div className="features1-content">
                <h2 className="thq-heading-2">{props.upcomingEvents}</h2>
                <span className="thq-body-small">
                  {props.descriptionUpcomingEvents}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features1-tab-horizontal1"
            >
              <div className="features1-divider-container1">
                {activeTab === 2 && (
                  <div className="features1-container3"></div>
                )}
              </div>
              <div className="features1-content1">
                <h2 className="thq-heading-2">{props.feature3Title}</h2>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features1-container1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features1-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .features1-image {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features1-image1 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features1-tabs-menu {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features1-tab-horizontal {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features1-divider-container {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-container2 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features1-content {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features1-tab-horizontal1 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features1-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features1-content1 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .features1-container1 {
              grid-gap: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

Features1.defaultProps = {
  feature2ImgAlt: 'Create Event Image',
  upcomingEvents: 'Upcoming Events',
  feature1ImgAlt: 'Browse upcoming events',
  feature1ImgSrc: '/image/c9-1400w.jpg',
  feature3Title: 'Agency Information',
  descriptionUpcomingEvents:
    'Explore and discover upcoming music concerts near you',
  feature2ImgSrc: '0c38898c-ac4d-4cc8-97fa-f5f6c6ff88ee',
  feature3ImgAlt: 'Agency Information Image',
  descriptionCreateEvents: 'Create your own events',
  feature3ImgSrc: '/image/c10-1400w.jpeg',
  feature3Description: 'Learn more about the agency',
}

Features1.propTypes = {
  feature2ImgAlt: PropTypes.string,
  upcomingEvents: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3Title: PropTypes.string,
  descriptionUpcomingEvents: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  descriptionCreateEvents: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
}

export default Features1
