"use client";

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

interface Features2Props {
  feature2ImgSrc: string
  featureBrowseEvents: string
  descriptionCreateEvents: string
  feature3ImgAlt: string
  createEvents: string
  searchEventsLocation: string
  feature1Description: string
  feature3ImgSrc: string
  feature3Description: string
  feature1ImgAlt: string
  feature2ImgAlt: string
  feature1ImgSrc: string
}

const Features2 = (props: Features2Props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding">
        <div className="features2-container1 thq-section-max-width">
          <div className="features2-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features2-tab-horizontal"
            >
              <div className="features2-divider-container">
                {activeTab === 0 && (
                  <div className="features2-container2"></div>
                )}
              </div>
              <div className="features2-content">
                <h2 className="thq-heading-2">{props.featureBrowseEvents}</h2>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features2-tab-horizontal1"
            >
              <div className="features2-divider-container1">
                {activeTab === 1 && (
                  <div className="features2-container3"></div>
                )}
              </div>
              <div className="features2-content1">
                <h2 className="thq-heading-2">
                  <Link href="/create-event" className="create-events-link">
                    {props.createEvents}
                  </Link>
                </h2>
                <span className="thq-body-small">
                  {props.descriptionCreateEvents}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features2-tab-horizontal2"
            >
              <div className="features2-divider-container2">
                {activeTab === 2 && (
                  <div className="features2-container4"></div>
                )}
              </div>
              <div className="features2-content2">
                <h2 className="thq-heading-2">{props.searchEventsLocation}</h2>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
          <div className="features2-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={`/images/c7.jpg`}
                className="features2-image thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={`/images/c9.jpg`}
                className="features2-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={`/images/c10.jpg`}
                className="features2-image2 thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features2-container1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features2-tabs-menu {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features2-tab-horizontal {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features2-divider-container {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features2-container2 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features2-content {
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
          .features2-tab-horizontal1 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features2-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features2-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features2-content1 {
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
          .features2-tab-horizontal2 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features2-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features2-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features2-content2 {
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
          .features2-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .features2-image {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features2-image1 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features2-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          @media (max-width: 991px) {
            .features2-container1 {
              grid-gap: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
            .features2-tabs-menu {
              order: 2;
            }
          }
        `}
      </style>
    </>
  )
}

Features2.defaultProps = {
  feature2ImgSrc: '/image/c12-1400w.jpg',
  featureBrowseEvents: 'Browse Upcoming Events',
  descriptionCreateEvents:
    'Have the freedom to create and promote your own music events through our platform.',
  feature3ImgAlt: 'Search Events by Location Image Alt Text',
  createEvents: 'Create Your Own Events',
  searchEventsLocation: 'Search Events by Location',
  feature1Description:
    'Explore a wide range of upcoming music concerts and events to find the perfect one for you.',
  feature3ImgSrc: '/image/c14-1400w.jpg',
  feature3Description:
    'Easily search for music events happening near you or in a specific location of your choice.',
  feature1ImgAlt: 'Browse Upcoming Events Image Alt Text',
  feature2ImgAlt: 'Create Your Own Events Image Alt Text',
  feature1ImgSrc: '/image/c11-1400w.jpeg',
}

Features2.propTypes = {
  feature2ImgSrc: PropTypes.string,
  featureBrowseEvents: PropTypes.string,
  descriptionCreateEvents: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  createEvents: PropTypes.string,
  searchEventsLocation: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
}

export default Features2
