"use client";

import React from 'react'
import PropTypes from 'prop-types'

interface FeaturesBrowseProps {
  step2Title: string
  step3Title: string
  step3Description: string
  step4Title: string
  step1Title: string
  step1Description: string
  step2Description: string
  step4Description: string
}

const FeaturesBrowse = (props: FeaturesBrowseProps) => {
  return (
    <>
      <div className="features-browse-container thq-section-padding">
        <div className="features-browse-max-width thq-section-max-width">
          <div className="features-browse-container1 thq-grid-2">
            <div className="features-browse-section-header">
              <h2 className="thq-heading-2">
                Discover the Power of Our Products
              </h2>
              <p className="thq-body-large">
                Are you ready to elevate your music concert events to the next
                level? Our agency specializes in delivering top-notch services
                tailored to meet all your event needs
              </p>
            </div>
            <div className="features-browse-container2">
              <div className="features-browse-container3 thq-card">
                <h2 className="thq-heading-2">{props.step1Title}</h2>
                <span className="features-browse-text03 thq-body-small">
                  {props.step1Description}
                </span>
                <label className="features-browse-text04 thq-heading-3">
                  01
                </label>
              </div>
              <div className="features-browse-container4 thq-card">
                <h2 className="thq-heading-2">{props.step2Title}</h2>
                <span className="features-browse-text06 thq-body-small">
                  {props.step2Description}
                </span>
                <label className="features-browse-text07 thq-heading-3">
                  02
                </label>
              </div>
              <div className="features-browse-container5 thq-card">
                <h2 className="thq-heading-2">{props.step3Title}</h2>
                <span className="features-browse-text09 thq-body-small">
                  {props.step3Description}
                </span>
                <label className="features-browse-text10 thq-heading-3">
                  03
                </label>
              </div>
              <div className="features-browse-container6 thq-card">
                <h2 className="thq-heading-2">{props.step4Title}</h2>
                <span className="features-browse-text12 thq-body-small">
                  {props.step4Description}
                </span>
                <label className="features-browse-text13 thq-heading-3">
                  04
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features-browse-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .features-browse-max-width {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .features-browse-container1 {
            align-items: start;
          }
          .features-browse-section-header {
            gap: var(--dl-space-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .features-browse-container2 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .features-browse-container3 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .features-browse-text03 {
            text-align: center;
          }
          .features-browse-text04 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .features-browse-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .features-browse-text06 {
            text-align: center;
          }
          .features-browse-text07 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .features-browse-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .features-browse-text09 {
            text-align: center;
          }
          .features-browse-text10 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .features-browse-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .features-browse-text12 {
            text-align: center;
          }
          .features-browse-text13 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .features-browse-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .features-browse-section-header {
              position: static;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .features-browse-container3 {
              width: 100%;
            }
            .features-browse-container4 {
              width: 100%;
            }
            .features-browse-container5 {
              width: 100%;
            }
            .features-browse-container6 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FeaturesBrowse.defaultProps = {
  step2Title: 'Create Your Own Event',
  step3Title: 'Learn More About Us',
  step3Description:
    'Find out more about our music concert agency, our mission, and our team.',
  step4Title: 'Search Events by Location',
  step1Title: 'Browse Upcoming Events',
  step1Description:
    'Discover a wide range of upcoming music concerts and events in your area.',
  step2Description:
    'Organize and create your own music event with our easy-to-use event creation tool.',
  step4Description:
    'Easily search for music events based on your preferred location and explore new music experiences.',
}

FeaturesBrowse.propTypes = {
  step2Title: PropTypes.string,
  step3Title: PropTypes.string,
  step3Description: PropTypes.string,
  step4Title: PropTypes.string,
  step1Title: PropTypes.string,
  step1Description: PropTypes.string,
  step2Description: PropTypes.string,
  step4Description: PropTypes.string,
}

export default FeaturesBrowse
