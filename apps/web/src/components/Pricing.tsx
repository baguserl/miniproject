"use client";

import React, { useState } from 'react'
import PropTypes from 'prop-types'

interface PricingProps {
  feature1: string
  buyTicket: string
  feature2: string
  feature4: string
  feature3: string
  plan: string
  price: string
  feature5: string
}

const Pricing = (props: PricingProps) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <>
      <div className="pricing-pricing23 thq-section-padding">
        <div className="pricing-max-width thq-section-max-width">
          {isMonthly && (
            <div className="pricing-container">
              <div className="pricing-column thq-card">
                <div className="pricing-price">
                  <div className="pricing-price1">
                    <p className="pricing-text thq-body-large">{props.plan}</p>
                    <h3 className="pricing-text1 thq-heading-3">
                      {props.price}
                    </h3>
                  </div>
                  <div className="pricing-list">
                    <div className="pricing-list-item">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">{props.feature1}</span>
                    </div>
                    <div className="pricing-list-item1">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">{props.feature2}</span>
                    </div>
                    <div className="pricing-list-item2">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">{props.feature3}</span>
                    </div>
                    <div className="pricing-list-item3">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">{props.feature4}</span>
                    </div>
                    <div className="pricing-list-item4">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">{props.feature5}</span>
                    </div>
                  </div>
                </div>
                <button className="pricing-button thq-button-filled thq-button-animated">
                  <span className="thq-body-small">{props.buyTicket}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .pricing-pricing23 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing-max-width {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pricing-container {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing-column {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing-price {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing-price1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing-text {
            font-style: normal;
            font-weight: 600;
          }
          .pricing-text1 {
            font-size: 48px;
          }
          .pricing-list {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-list-item {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing-list-item1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing-list-item2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing-list-item3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing-list-item4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing-button {
            width: 100%;
          }
          @media (max-width: 991px) {
            .pricing-container {
              flex-direction: column;
            }
            .pricing-column {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .pricing-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Pricing.defaultProps = {
  feature1: 'Unlimited access to all events',
  buyTicket: 'Buy Ticket',
  feature2: 'Create unlimited events',
  feature4: 'Priority customer support',
  feature3: 'Exclusive VIP event invitations',
  plan: 'Buy Ticket',
  price: '$30',
  feature5: 'Monthly free gift',
}

Pricing.propTypes = {
  feature1: PropTypes.string,
  buyTicket: PropTypes.string,
  feature2: PropTypes.string,
  feature4: PropTypes.string,
  feature3: PropTypes.string,
  plan: PropTypes.string,
  price: PropTypes.string,
  feature5: PropTypes.string,
}

export default Pricing
