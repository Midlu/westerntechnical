import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';

import BackgroundSlider from 'gatsby-image-background-slider'

import demo1 from '../assets/images/WT.jpg';
import gplay from '../assets/images/google-play-badge.svg';
import astore from '../assets/images/app-store-badge.svg';
import HomeBodyContent from '../components/HomeBodyContent';
import AboutUs from '../components/AboutUs';
import MeetTheTeam from '../components/MeetTheTeam';

const IndexPage = () => (
  <Layout>
    <header className="masthead">
      <div className="h-100">
        <div style={{
          width: '100vw',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }} className="h-100">
          <h1 style={{
            flex: "0 0 85vw",
            color: "black", fontSize: "2rem",
            fontFamily: "Lato,Helvetica Neue,Arial,Helvetica,sans-serif",
          }}>
            Western Technical is a telecommunications company that specializes in cellular towers. We proudly offer the following services and deliver in depth reports in a professional and timely manner.
            </h1>
          <div>
            <BackgroundSlider
              query={useStaticQuery(graphql`
            query {
              backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
                nodes {
                  relativePath
                  childImageSharp {
                    fluid (maxWidth: 4000, quality: 100){
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          `)}
              initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
              transition={4} // transition duration between images
              duration={8} // how long an image is shown// pass down standard element props
              style={{
                transform: "rotate(-2deg) scale(.9)",
              }}>
            </BackgroundSlider>
          </div>
        </div>
      </div>
    </header>
    <section className="bg-primary text-center" id="services">
      <br />
      <HomeBodyContent />
    </section>
    <section id="about">
      <br />
      <AboutUs />
    </section>
    <section id='meettheteam'>
      <br />
      <MeetTheTeam />
    </section>
  </Layout >
);

export default IndexPage;
