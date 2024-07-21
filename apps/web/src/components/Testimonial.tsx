"use client";

import React from 'react'
import PropTypes from 'prop-types'

interface TestimonialProps {
  review1: string
  author3Name: string
  author1Alt: string
  author3Position: string
  author2Name: string
  content1: string
  author2Alt: string
  author3Src: string
  author4Alt: string
  author2Position: string
  author3Alt: string
  review4: string
  review2: string
  author1Position: string
  author2Src: string
  heading1: string
  author1Src: string
  author1Name: string
  review3: string
  author4Src: string
  author4Name: string
  author4Position: string
}

const Testimonial = (props: TestimonialProps) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial-max-width thq-section-max-width">
          <div className="testimonial-container">
            <h2 className="thq-heading-2">{props.heading1}</h2>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div data-animated="true" className="thq-card testimonial-card">
                  <div className="testimonial-container02">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial-image"
                    />
                    <div className="testimonial-container03">
                      <strong className="thq-body-large">
                        {props.author1Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author1Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text03 thq-body-small">
                    {props.review1}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card1"
                >
                  <div className="testimonial-container04">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial-image1"
                    />
                    <div className="testimonial-container05">
                      <strong className="thq-body-large">
                        {props.author2Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author2Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text06 thq-body-small">
                    {props.review2}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card2"
                >
                  <div className="testimonial-container06">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial-image2"
                    />
                    <div className="testimonial-container07">
                      <strong className="thq-body-large">
                        {props.author3Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author3Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text09 thq-body-small">
                    {props.review3}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card3"
                >
                  <div className="testimonial-container08">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial-image3"
                    />
                    <div className="testimonial-container09">
                      <strong className="thq-body-large">
                        {props.author4Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author4Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text12 thq-body-small">
                    {props.review4}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial-container {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .testimonial-container02 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-container03 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text03 {
            text-align: left;
          }
          .testimonial-container04 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-container05 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text06 {
            text-align: left;
          }
          .testimonial-container06 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-container07 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text09 {
            text-align: left;
          }
          .testimonial-container08 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image3 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-container09 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text12 {
            text-align: left;
          }
          @media (max-width: 991px) {
            .testimonial-container {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial-container {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .testimonial-card {
              width: 100%;
            }
            .testimonial-card1 {
              width: 100%;
            }
            .testimonial-card2 {
              width: 100%;
            }
            .testimonial-card3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial.defaultProps = {
  review1:
    'Working with this agency was a game-changer for our music concert event. From the initial planning stages to the final encore, their team handled every detail with precision and professionalism',
  author3Name: 'Michael Davis',
  author1Alt: 'Image of John Smith',
  author3Position: 'Musician',
  author2Name: 'Emily Johnson',
  content1:
    'I attended a concert organized by this agency and it was an unforgettable experience. The atmosphere was amazing and the music was top-notch!',
  author2Alt: 'Image of Emily Johnson',
  author3Src:
    'https://images.unsplash.com/photo-1546778316-dfda79f1c84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDk4ODA3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Sarah Thompson',
  author2Position: 'Event Planner',
  author3Alt: 'Image of Michael Davis',
  review4:
    'Attending concerts through this agency has been a highlight for me. The variety of music genres and the quality of performances never disappoint.',
  review2:
    'Working with this agency to plan a music event was a breeze. They were professional, organized, and truly cared about making the event a success.',
  author1Position: 'Music Enthusiast',
  author2Src:
    'https://images.unsplash.com/photo-1531000164940-cde686a49bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDk4ODA3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Testimonials',
  author1Src:
    'https://images.unsplash.com/photo-1548918901-9b31223c5c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDk4ODA3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: 'John Smith',
  review3:
    "I've performed at multiple events organized by this agency and each time has been fantastic. They know how to create an incredible experience for both the artists and the audience.",
  author4Src:
    'https://images.unsplash.com/photo-1587764379873-97837921fd44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDk4ODA3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: 'Sarah Thompson',
  author4Position: 'Concert Goer',
}

Testimonial.propTypes = {
  review1: PropTypes.string,
  author3Name: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Position: PropTypes.string,
  author2Name: PropTypes.string,
  content1: PropTypes.string,
  author2Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author4Alt: PropTypes.string,
  author2Position: PropTypes.string,
  author3Alt: PropTypes.string,
  review4: PropTypes.string,
  review2: PropTypes.string,
  author1Position: PropTypes.string,
  author2Src: PropTypes.string,
  heading1: PropTypes.string,
  author1Src: PropTypes.string,
  author1Name: PropTypes.string,
  review3: PropTypes.string,
  author4Src: PropTypes.string,
  author4Name: PropTypes.string,
  author4Position: PropTypes.string,
}

export default Testimonial
