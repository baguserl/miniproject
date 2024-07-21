"use client";

import React from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import Features1 from '../components/Features1'
import FeatureExplore from '../components/Feature-explore'
import Features2 from '../components/Features2'
import Pricing from '../components/Pricing'
import FeaturesBrowse from '../components/Feature-browse'
import Testimonial from '../components/Testimonial'
import OfficeAddress from '../components/Office-address'
import Footer from '../components/Footer'

interface HomeProps {
  link1: string
  termsLink: string
  link3: string
  privacyLink: string
  link4: string
  cookiesLink: string
  link5: string
  link2: string
  logoAlt: string
  image6Src: string
  image7Src: string
  image3Src: string
  image2Src: string
  image6Alt: string
  image8Src: string
  image4Src: string
  content1: string
  image1Src: string
  heading1: string
  image2Alt: string
  image10Src: string
  image4Alt: string
  image5Alt: string
  image5Src: string
  image9Src: string
  image3Alt: string
  content2: string
  location2ImageAlt: string
  location1Description: string
  location2ImageSrc: string
  location2: string
  location1ImageAlt: string
  location1: string
  heading2: string
  location1ImageSrc: string
  location2Description: string
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

const Home = (props: HomeProps) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Musical Party</title>
          <meta property="og:title" content="Musical Party" />
        </Head>
        
        <Hero image6Src="/image/c8-1500w.jpg"></Hero>
        <Features1></Features1>
        <FeatureExplore></FeatureExplore>
        <Features2></Features2>
        <Pricing></Pricing>
        <FeaturesBrowse></FeaturesBrowse>
        <Testimonial></Testimonial>
        <OfficeAddress></OfficeAddress>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Home
