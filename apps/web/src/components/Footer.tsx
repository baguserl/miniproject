"use client";

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

interface FooterProps {
  link1: string;
  termsLink: string;
  link3: string;
  privacyLink: string;
  link4: string;
  cookiesLink: string;
  link5: string;
  link2: string;
  logoAlt: string;
}

const Footer = (props: FooterProps) => {
  return (
    <>
      <footer className="footer-footer7 thq-section-padding">
        <div className="footer-max-width thq-section-max-width">
          <div className="footer-content">
            <div className="footer-logo"></div>
            <div className="footer-links">
              <span className="thq-body-small">{props.link1}</span>
              <Link href="/create-event" legacyBehavior>
                <a className="thq-body-small">{props.link2}</a>
              </Link>
              <Link href="/AboutUs" legacyBehavior>
                <a className="thq-body-small">{props.link3}</a>
              </Link>
              <span className="thq-body-small">{props.link4}</span>
              <Link href="/ContactUs" legacyBehavior>
                <a className="thq-body-small">{props.link5}</a>
              </Link>
            </div>
          </div>
          <div className="footer-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer-row">
              <div className="footer-container">
                <span className="thq-body-small">2024 Musical Party</span>
              </div>
              <div className="footer-footer-links">
                <Link href="/Policy" legacyBehavior>
                  <a className="footer-text6 thq-body-small">{props.privacyLink}</a>
                </Link>
                <Link href="/TermConditions" legacyBehavior>
                  <a className="thq-body-small">{props.termsLink}</a>
                </Link>
                <Link href="/Cookies" legacyBehavior>
                  <a className="thq-body-small">{props.cookiesLink}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-footer7 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .footer-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer-content {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer-logo {
            gap: 24px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
          }
          .footer-credits {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer-container {
            display: flex;
            align-items: flex-start;
          }
          .footer-footer-links {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .footer-text6 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
          }
          @media (max-width: 767px) {
            .footer-row {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer-links {
              flex-direction: column;
            }
            .footer-footer-links {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  );
}

Footer.defaultProps = {
  link1: 'Browse Events',
  termsLink: 'Terms and Conditions',
  link3: 'About Us',
  privacyLink: 'Privacy Policy',
  link4: 'Search Events',
  cookiesLink: 'Cookies Policy',
  link5: 'Contact Us',
  link2: 'Create Event',
};

Footer.propTypes = {
  link1: PropTypes.string,
  termsLink: PropTypes.string,
  link3: PropTypes.string,
  privacyLink: PropTypes.string,
  link4: PropTypes.string,
  cookiesLink: PropTypes.string,
  link5: PropTypes.string,
  link2: PropTypes.string,
  logoAlt: PropTypes.string,
};

export default Footer;
