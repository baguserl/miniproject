"use client";

import React from 'react'
import PropTypes from 'prop-types'

interface FeatureExploreProps {
  content1: string
  heading1: string
} 

const FeatureExplore = (props: FeatureExploreProps) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="thq-section-max-width">
          <div className="feature-explore-accent2-bg">
            <div className="feature-explore-accent1-bg">
              <div className="feature-explore-container1">
                <span className="feature-explore-text thq-heading-2">
                  {props.heading1}
                </span>
                <p className="feature-explore-text1 thq-body-large">
                  {props.content1}
                </p>
                <div className="feature-explore-content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .feature-explore-accent2-bg {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-cardradius);
            justify-content: space-between;
            transform-style: preserve-3d;
            background-color: var(--dl-color-theme-accent2);
          }
          .feature-explore-accent2-bg:hover {
            transform: scale3d(1.1, 1.1, 1.1);
          }
          .feature-explore-accent1-bg {
            width: 100%;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(-2deg) skew(0deg, 0deg);
            align-items: center;
            border-radius: var(--dl-radius-radius-cardradius);
            justify-content: space-between;
            transform-style: preserve-3d;
            background-color: var(--dl-color-theme-accent1);
          }
          .feature-explore-container1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-cardradius);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .feature-explore-container1:hover {
            color: var(--dl-color-theme-neutral-light);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .feature-explore-text {
            font-size: 55px;
            align-self: center;
          }
          .feature-explore-text1 {
            height: auto;
            font-size: 22px;
            align-self: center;
          }
          .feature-explore-content {
            gap: var(--dl-space-space-oneandhalfunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 767px) {
            .feature-explore-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureExplore.defaultProps = {
  content1:
    'Browse through our upcoming events and discover the perfect concert for you.',
  heading1: 'Find Your Next Concert',
}

FeatureExplore.propTypes = {
  content1: PropTypes.string,
  heading1: PropTypes.string,
}

export default FeatureExplore
