"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import PropTypes from 'prop-types'

interface NavbarProps {
  logoAlt: string
  text: string
  home: string
  events: string
  AboutUs: string
  page1Description: string
  page1ImageAlt: string
  page1ImageSrc: string
  page2Description: string
  page2ImageAlt: string
  page2ImageSrc: string
  page3Description: string
  page3ImageAlt: string
  page3ImageSrc: string
  page4Description: string
  page4ImageAlt: string
  page4ImageSrc: string
}

const Navbar = (props: NavbarProps) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  return (
    <>
      <header className="navbar-container">
        <header data-thq="thq-navbar" className="navbar-navbar-interactive">
          <img
            alt={props.logoAlt}
            src={`/images/logo.png`}
            className="navbar-image1"
          />
          <h1 className="navbar-text">{props.text}</h1>
          <div className="navbar-container1">
            <button className="navbar-action2 thq-button-outline thq-button-animated">
              <span className="thq-body-small">Search</span>
            </button>
            <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
              <nav className="navbar-links">
              <Link href="/" legacyBehavior>
                  <a className="thq-link thq-body-small">{props.home}</a>
              </Link>
                <span className="thq-link thq-body-small">{props.events}</span>
                <Link href="/AboutUs" legacyBehavior>
                  <a className="thq-link thq-body-small">{props.AboutUs}</a>
                </Link>
                <div
                  onClick={() => setLink5DropdownVisible(!link5DropdownVisible)}
                  className="navbar-link5-dropdown-trigger"
                >
                  <div className="navbar-icon-container">
                    {link5DropdownVisible && (
                      <div className="navbar-container2">
                        <svg viewBox="0 0 1024 1024" className="navbar-icon">
                          <path d="M298 426h428l-214 214z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar-icon02">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
            <div className="navbar-nav">
              <div className="navbar-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar-logo"
                />
                <div data-thq="thq-close-menu" className="navbar-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar-links1">
                <span className="thq-link thq-body-small">{props.home}</span>
                <span className="thq-link thq-body-small">{props.events}</span>
                <span className="thq-link thq-body-small">{props.aboutUs}</span>
                <div className="navbar-link5-accordion">
                  <div
                    onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                    className="navbar-trigger"
                  >
                    <div className="navbar-icon-container1">
                      {link5AccordionOpen && (
                        <div className="navbar-container3">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="navbar-icon06"
                          >
                            <path d="M298 426h428l-214 214z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  {link5AccordionOpen && (
                    <div className="navbar-container4">
                      <div className="navbar-menu-item">
                        <img
                          alt={props.page1ImageAlt}
                          src={props.page1ImageSrc}
                          className="navbar-page1-image"
                        />
                        <div className="navbar-content">
                          <span className="navbar-page1 thq-body-large">
                            Home
                          </span>
                          <span className="thq-body-small">
                            {props.page1Description}
                          </span>
                        </div>
                      </div>
                      <div className="navbar-menu-item1">
                        <img
                          alt={props.page2ImageAlt}
                          src={props.page2ImageSrc}
                          className="navbar-page2-image"
                        />
                        <div className="navbar-content1">
                          <span className="navbar-page2 thq-body-large">
                            Events
                          </span>
                          <span className="thq-body-small">
                            {props.page2Description}
                          </span>
                        </div>
                      </div>
                      <div className="navbar-menu-item2">
                        <img
                          alt={props.page3ImageAlt}
                          src={props.page3ImageSrc}
                          className="navbar-page3-image"
                        />
                        <div className="navbar-content2">
                          <span className="navbar-page3 thq-body-large">
                            About Us
                          </span>
                          <span className="thq-body-small">
                            {props.page3Description}
                          </span>
                        </div>
                      </div>
                      <div className="navbar-menu-item3">
                        <img
                          alt={props.page4ImageAlt}
                          src={props.page4ImageSrc}
                          className="navbar-page4-image"
                        />
                        <div className="navbar-content3">
                          <span className="navbar-page4 thq-body-large">
                            Create Event
                          </span>
                          <span className="thq-body-small">
                            {props.page4Description}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>
            <div className="navbar-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-x-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-x-small"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="thq-icon-small"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar-container {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 1000;
            position: sticky;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-navbar-interactive {
            width: 100%;
            display: flex;
            z-index: 100;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .navbar-image1 {
            width: 128px;
            height: 131px;
          }
          .navbar-text {
            color: #1616dc;
            font-size: 60px;
            align-self: center;
            font-style: normal;
            font-family: 'Roboto';
            font-weight: 800;
          }
          .navbar-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .navbar-action2 {
            display: flex;
            flex-direction: row;
          }
          .navbar-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar-links {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar-link5-dropdown-trigger {
            gap: 4px;
            cursor: pointer;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar-icon-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar-container2 {
            display: flex;
            align-items: center;
            animation-name: rotateInDownLeft;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: flex-end;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .navbar-icon {
            width: 24px;
            height: 24px;
          }
          .navbar-burger-menu {
            display: none;
          }
          .navbar-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-logo {
            height: 3rem;
          }
          .navbar-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-links1 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .navbar-link5-accordion {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-trigger {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-icon-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar-container3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar-icon06 {
            width: 24px;
            height: 24px;
          }
          .navbar-container4 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-halfunit);
            grid-template-columns: 1fr;
          }
          .navbar-menu-item {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar-page1-image {
            width: 50px;
            height: 50px;
          }
          .navbar-content {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar-page1 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar-menu-item1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar-page2-image {
            width: 50px;
            height: 50px;
          }
          .navbar-content1 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar-page2 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar-menu-item2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar-page3-image {
            width: 50px;
            height: 50px;
          }
          .navbar-content2 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar-page3 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar-menu-item3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar-page4-image {
            width: 50px;
            height: 50px;
          }
          .navbar-content3 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar-page4 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar-icon-group {
            gap: var(--dl-space-space-twounits);
            display: flex;
          }
          @media (max-width: 767px) {
            .navbar-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navbar-desktop-menu {
              display: none;
            }
            .navbar-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .navbar-mobile-menu {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .navbar-container4 {
              grid-gap: 0;
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navbar-mobile-menu {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  page1Description: 'Page One Description',
  textinputPlaceholder: '',
  events: 'Events',
  AboutUs: 'About Us',
  logoSrc: '/image/logo-1400w.png',
  page4ImageAlt: 'image',
  page4Description: 'Page Four Description',
  page3Description: 'Page Three Description',
  logoAlt: 'Music Concert Agency Logo',
  text: 'Musical Party',
  page3ImageAlt: 'image',
  page1ImageAlt: 'image',
  page2ImageAlt: 'image',
  page2Description: 'Page Two Description',
  home: 'Home',
}

Navbar.propTypes = {
  page1Description: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  events: PropTypes.string,
  page3ImageSrc: PropTypes.string,
  page2ImageSrc: PropTypes.string,
  AboutUs: PropTypes.string,
  logoSrc: PropTypes.string,
  page4ImageAlt: PropTypes.string,
  page4Description: PropTypes.string,
  page1ImageSrc: PropTypes.string,
  page3Description: PropTypes.string,
  logoAlt: PropTypes.string,
  text: PropTypes.string,
  page3ImageAlt: PropTypes.string,
  page4ImageSrc: PropTypes.string,
  page1ImageAlt: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  page2Description: PropTypes.string,
  home: PropTypes.string,
}

export default Navbar
