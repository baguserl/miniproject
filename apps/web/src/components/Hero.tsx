"use client";

import React from 'react'
import PropTypes from 'prop-types'
import Script from 'next/script';

interface HeroProps { 
  image6Src: string,
  image7Src: string,
  image3Src: string,
  image2Src: string,
  image6Alt: string,
  image8Src: string,
  image4Src: string,
  content1: string,
  image1Src: string,
  heading1: string,
  image2Alt: string,
  image10Src: string,
  image4Alt: string,
  image5Alt: string,
  image5Src: string,
  image9Src: string,
  image3Alt: string,
}


const Hero = (props: HeroProps) => {
  return (
    <>
      <div className="hero-header78">
        <div className="hero-column thq-section-max-width thq-section-padding">
          <div className="hero-content">
            <h1 className="hero-text thq-heading-1">{props.heading1}</h1>
            <p className="hero-text1 thq-body-large">{props.content1}</p>
          </div>
          <div className="hero-actions"></div>
        </div>
        <div className="hero-content1">
          <div className="hero-row-container thq-mask-image-horizontal thq-animated-group-container-horizontal">
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={`/images/c1.jpg`}
                className="hero-placeholder-image thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image2Alt}
                src={`/images/c2.jpg`}
                className="hero-placeholder-image01 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={`/images/c3.jpg`}
                className="hero-placeholder-image02 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={`/images/c4.jpg`}
                className="hero-placeholder-image03 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image5Alt}
                src={`/images/c5.jpg`}
                className="hero-placeholder-image04 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero-placeholder-image05 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
            <div className="thq-animated-group-horizontal">
              <img
                alt="Discover the Best Music Events"
                src={props.image1Src}
                className="hero-placeholder-image06 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero-placeholder-image07 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero-placeholder-image08 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero-placeholder-image09 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="hero-container1">
            <Script
              html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-header78 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .hero-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero-text {
            text-align: center;
          }
          .hero-text1 {
            text-align: center;
          }
          .hero-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
          }
          .hero-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero-row-container {
            width: 100%;
          }
          .hero-placeholder-image {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image01 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image02 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image03 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image04 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image05 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image06 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image07 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image08 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image09 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image10 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image11 {
            width: 400px;
            height: 400px;
          }
          .hero-container1 {
            display: contents;
          }
          @media (max-width: 767px) {
            .hero-content1 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero-actions {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  image6Src: '/image/c6-1500w.jpg',
  image7Src: '0c38898c-ac4d-4cc8-97fa-f5f6c6ff88ee',
  image3Src: '/image/c3-1500w.jpeg',
  image2Src: '/image/c2-1500w.jpg',
  image6Alt: 'Hero Image',
  image8Src: '855b58b9-1696-428b-8980-297fa7769d9a',
  image4Src: '/image/c5-1500w.jpg',
  content1:
    'Explore a wide range of music events, from intimate concerts to large-scale festivals',
  image1Src: '/image/c1-1500w.jpg',
  heading1: 'Discover the Best Music Events',
  image2Alt: 'Hero Image',
  image10Src: '9ac662f8-077d-4ce3-b6cd-73e40f6cd759',
  image4Alt: 'Hero Image',
  image5Alt: 'Hero Image',
  image5Src: '/image/c7-1500w.jpg',
  image9Src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image3Alt: 'Hero Image',
}

Hero.propTypes = {
  image6Src: PropTypes.string,
  image7Src: PropTypes.string,
  image3Src: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image4Src: PropTypes.string,
  content1: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
  image2Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image9Src: PropTypes.string,
  image3Alt: PropTypes.string,
}

export default Hero
