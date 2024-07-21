"use client";

import React from 'react'
import PropTypes from 'prop-types'

interface OfficeAddressProps {
  content1: string
  location2ImageAlt: string
  location1Description: string
  location2ImageSrc: string
  location2: string
  location1ImageAlt: string
  location1: string
  heading1: string
  location1ImageSrc: string
  location2Description: string
}


const OfficeAddress = (props: OfficeAddressProps) => {
  return (
    <>
      <div className="office-address-container thq-section-padding">
        <div className="office-address-max-width thq-section-max-width">
          <div className="office-address-content thq-flex-row">
            <div className="office-address-content1">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <p className="thq-body-large">{props.content1}</p>
            </div>
          </div>
          <div className="office-address-content2 thq-flex-row">
            <div className="office-address-container1">
              <img
                alt={props.location1ImageAlt}
                src={`/images/c11.jpg`}
                className="office-address-image thq-img-ratio-16-9"
              />
              <h3 className="office-address-text2 thq-heading-3">
                {props.location1}
              </h3>
              <p className="thq-body-large">{props.location1Description}</p>
              <div className="office-address-container2"></div>
            </div>
            <div className="office-address-container3">
              <img
                alt={props.location2ImageAlt}
                src={`/images/c12.jpg`}
                className="office-address-image1 thq-img-ratio-16-9"
              />
              <h3 className="office-address-text4 thq-heading-3">
                {props.location2}
              </h3>
              <p className="thq-body-large">{props.location2Description}</p>
              <div className="office-address-container4"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .office-address-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .office-address-max-width {
            align-self: center;
          }
          .office-address-content {
            width: 100%;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
          }
          .office-address-content1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .office-address-content2 {
            width: 100%;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .office-address-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .office-address-image {
            object-fit: cover;
          }
          .office-address-text2 {
            text-align: center;
          }
          .office-address-container2 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .office-address-container3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .office-address-image1 {
            object-fit: cover;
          }
          .office-address-text4 {
            text-align: center;
          }
          .office-address-container4 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .office-address-content {
              align-items: flex-start;
              justify-content: flex-start;
            }
            .office-address-content2 {
              position: relative;
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .office-address-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .office-address-image {
              width: 100%;
            }
            .office-address-image1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

OfficeAddress.defaultProps = {
  content1: '123 Music Lane, Suite 500, New York, NY 10001',
  location2ImageAlt: 'image2Alt',
  location1Description:
    'Bucharest gets grooving with a concert by Moonlight Breakfast. Get ready for an electrifying night! Get  your ticket',
  location2ImageSrc: '/images/c11.jpg',
  location2: 'New York',
  location1ImageAlt: 'image1Alt',
  location1: 'Bucharest',
  heading1: 'Office :',
  location1ImageSrc: '/images/c12.jpg',
  location2Description:
    "New York City's concert scene is always buzzing! Search on Bandsintown, Ticketmaster, or Songkick to find the perfect show for you.",
}

OfficeAddress.propTypes = {
  content1: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  location1Description: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  location2: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  location1: PropTypes.string,
  heading1: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  location2Description: PropTypes.string,
}

export default OfficeAddress
