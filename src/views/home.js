import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Digital Guide</title>
        <meta
          name="description"
          content="Unlock your online potential with Digital Guide - your expert partner in cutting-edge web development and innovative digital solutions."
        />
        <meta property="og:title" content="Digital Guide" />
        <meta
          property="og:description"
          content="Unlock your online potential with Digital Guide - your expert partner in cutting-edge web development and innovative digital solutions."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d1dafcde-584e-4366-9fed-9f8f41cceb67/5114a9a5-cd72-4944-b426-7da0b7160025?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div id="top" className="home-hero">
        <div className="home-container01">
          <div className="home-container02">
            <div className="home-card">
              <h1 className="home-text">Embark On Digital Flight, </h1>
              <h1 className="home-text001">Bloom In Pixel Bright!</h1>
              <span className="home-text002">
                <span className="home-text003">Welcome to Digital Guide!</span>
                <span className="home-text004">
                  {' '}
                  Let&apos;s dive into a world where
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text005">creativity</span>
                <span className="home-text006">
                  {' '}
                  merges with digital precision,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text007">
                  turning your
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text008">
                  dreams into vibrant realities!
                </span>
                <span className="home-text009"> </span>
                <span className="home-text010">
                  In here,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text011">
                  every pixel tells a
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text012">story</span>
                <span className="home-text013">,</span>
                <span className="home-text014">
                  {' '}
                  and every line of code is a
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text015">
                  step towards
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text016">your vision coming to life</span>
                <span className="home-text017">.</span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Feel free to proceed to next step for the comprehensive
                  process.
                </span>
                <br></br>
              </span>
              <div className="home-container03">
                <div className="home-container04">
                  <a href="#features" className="home-link">
                    <PrimaryPinkButton
                      button="Scroll to Next"
                      className="home-component1"
                    ></PrimaryPinkButton>
                  </a>
                </div>
                <OutlineGrayButton
                  button="Find more"
                  rootClassName="outline-gray-button-root-class-name"
                ></OutlineGrayButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-empty"></section>
      <section id="features" className="home-features">
        <div className="home-container05">
          <div className="home-container06">
            <div className="home-container07">
              <h1 className="home-text023">From Concepts To Code</h1>
              <h1 className="home-text024">Our Journey Unfolds</h1>
            </div>
            <span className="home-text025">
              <span className="home-text026">
                Our process
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text027">merges design and function</span>
              <span className="home-text028">
                {' '}
                in a graceful dance, ensuring
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text029">
                each pixel
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text030">captures</span>
              <span className="home-text031"> your vision</span>
              <span className="home-text032">
                {' '}
                and
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text033">each interaction</span>
              <span className="home-text034"> flows effortlessly</span>
              <span className="home-text035">
                .
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="home-text036"></br>
              <span className="home-text037">
                Brace yourself for a
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text038">delightful reveal</span>
              <span className="home-text039">
                {' '}
                of the initial designs -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text040">your dream</span>
              <span className="home-text041">
                {' '}
                is about to
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text042">take shape</span>
              <span className="home-text043">
                ,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text044">simply</span>
              <span className="home-text045">
                {' '}
                and
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text046">beautifully!</span>
              <br></br>
            </span>
          </div>
          <div className="home-container08">
            <div>
              <div className="home-container10">
                <Script
                  html={`<html>
    <head>
<style>
.card {
  width: 100%;
  max-width: 230px;
  min-width: 200px;
  height: 260px;
  
  background-color: #292929;
  margin: 40px;
    border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
  border: 2px solid rgba(7, 7, 7, 0.12);
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
}

.icon {
  margin: 0 auto;
  width: 100%;
  height: 80px;
  max-width: 80px;
  background: linear-gradient(90deg, #7eaaff 0%, #ff48fb 40%, rgba(0, 0, 0, 0.28) 60%);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.8s ease;
  background-position: 0px;
  background-size: 200px;
}

.icon svg {
  fill: white;
}

.card .title {
  width: 100%;
  margin: 0;
  text-align: center;
  margin-top: 30px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.card .text {
  width: 80%;
  margin: 0 auto;
  font-size: 13px;
  text-align: center;
  margin-top: 20px;
  color: white;
  font-weight: 200;
  letter-spacing: 2px;
  opacity: 0;
  max-height: 0;
  transition: all 0.3s ease;
}

.card:hover {
  height: 270px;
}

.card:hover .text {
  transition: all 0.3s ease;
  opacity: 1;
  max-height: 40px;
}

.card:hover .icon {
  background-position: -120px;
  transition: all 0.3s ease;
}

.card:hover .icon svg path {
  fill: url('#gradientColor');
  transition: all 0.3s ease;
}
</style>
    </head>
<div class="card">
  <div class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="38px" width="38px" version="1.1" id="heart" viewBox="0 0 471.701 471.701" xml:space="preserve">
      <linearGradient id="gradientColor">
        <stop offset="5%" stop-color="#7eaaff"></stop>
        <stop offset="95%" stop-color="#ff48fb"></stop>
      </linearGradient>
      <g>
        <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
      </g>
    </svg>
  </div>
  <p class="title">Discovery<br>Phase</p>
  <p class="text">Understanding vision and goals.</p>
</div>

</html>`}
                ></Script>
              </div>
            </div>
            <div>
              <div className="home-container12">
                <Script
                  html={`<html>
    <head>
<style>
.card {
  width: 100%;
  max-width: 230px;
  min-width: 200px;
  height: 260px;
  
  background-color: #292929;
  margin: 40px;
    border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
  border: 2px solid rgba(7, 7, 7, 0.12);
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
}

.icon {
  margin: 0 auto;
  width: 100%;
  height: 80px;
  max-width: 80px;
  background: linear-gradient(90deg, #7eaaff 0%, #ff48fb 40%, rgba(0, 0, 0, 0.28) 60%);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.8s ease;
  background-position: 0px;
  background-size: 200px;
}

.icon svg {
  fill: white;
}

.card .title {
  width: 100%;
  margin: 0;
  text-align: center;
  margin-top: 30px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.card .text {
  width: 80%;
  margin: 0 auto;
  font-size: 13px;
  text-align: center;
  margin-top: 20px;
  color: white;
  font-weight: 200;
  letter-spacing: 2px;
  opacity: 0;
  max-height: 0;
  transition: all 0.3s ease;
}

.card:hover {
  height: 270px;
}

.card:hover .text {
  transition: all 0.3s ease;
  opacity: 1;
  max-height: 40px;
}

.card:hover .icon {
  background-position: -120px;
  transition: all 0.3s ease;
}

.card:hover .icon svg path {
  fill: url('#gradientColor');
  transition: all 0.3s ease;
}
</style>
    </head>
<div class="card">
  <div class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="38px" width="38px" version="1.1" id="heart" viewBox="0 0 471.701 471.701" xml:space="preserve">
      <linearGradient id="gradientColor">
        <stop offset="5%" stop-color="#7eaaff"></stop>
        <stop offset="95%" stop-color="#ff48fb"></stop>
      </linearGradient>
      <g>
        <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
      </g>
    </svg>
  </div>
  <p class="title">Design<br>Process</p>
  <p class="text">Collaborative, engaging creation.</p>
</div>

</html>`}
                ></Script>
              </div>
            </div>
            <div>
              <div className="home-container14">
                <Script
                  html={`<html>
    <head>
<style>
.card {
  width: 100%;
  max-width: 230px;
  min-width: 200px;
  height: 260px;
  background-color: #292929;
  margin: 40px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
  border: 2px solid rgba(7, 7, 7, 0.12);
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
}

.icon {
  margin: 0 auto;
  width: 100%;
  height: 80px;
  max-width: 80px;
  background: linear-gradient(90deg, #7eaaff 0%, #ff48fb 40%, rgba(0, 0, 0, 0.28) 60%);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.8s ease;
  background-position: 0px;
  background-size: 200px;
}

.icon svg {
  fill: white;
}

.card .title {
  width: 100%;
  margin: 0;
  text-align: center;
  margin-top: 30px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.card .text {
  width: 80%;
  margin: 0 auto;
  font-size: 13px;
  text-align: center;
  margin-top: 20px;
  color: white;
  font-weight: 200;
  letter-spacing: 2px;
  opacity: 0;
  max-height: 0;
  transition: all 0.3s ease;
}

.card:hover {
  height: 270px;
}

.card:hover .text {
  transition: all 0.3s ease;
  opacity: 1;
  max-height: 40px;
}

.card:hover .icon {
  background-position: -120px;
  transition: all 0.3s ease;
}

.card:hover .icon svg path {
  fill: url('#gradientColor');
  transition: all 0.3s ease;
}
</style>
    </head>
<div class="card">
  <div class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="38px" width="38px" version="1.1" id="heart" viewBox="0 0 471.701 471.701" xml:space="preserve">
      <linearGradient id="gradientColor">
        <stop offset="5%" stop-color="#7eaaff"></stop>
        <stop offset="95%" stop-color="#ff48fb"></stop>
      </linearGradient>
      <g>
        <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
      </g>
    </svg>
  </div>
  <p class="title">Deployment<br>Stage</p>
  <p class="text">Launching and supporting growth.</p>
</div>

</html>`}
                ></Script>
              </div>
            </div>
            <div>
              <div className="home-container16">
                <Script
                  html={`<html>
    <head>
<style>
.card {
  width: 100%;
  max-width: 230px;
  min-width: 200px;
  height: 260px;
  background-color: #292929;
  margin: 40px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
  border: 2px solid rgba(7, 7, 7, 0.12);
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
}

.icon {
  margin: 0 auto;
  width: 100%;
  height: 80px;
  max-width: 80px;
  background: linear-gradient(90deg, #7eaaff 0%, #ff48fb 40%, rgba(0, 0, 0, 0.28) 60%);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.8s ease;
  background-position: 0px;
  background-size: 200px;
}

.icon svg {
  fill: white;
}

.card .title {
  width: 100%;
  margin: 0;
  text-align: center;
  margin-top: 30px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.card .text {
  width: 80%;
  margin: 0 auto;
  font-size: 13px;
  text-align: center;
  margin-top: 20px;
  color: white;
  font-weight: 200;
  letter-spacing: 2px;
  opacity: 0;
  max-height: 0;
  transition: all 0.3s ease;
}

.card:hover {
  height: 270px;
}

.card:hover .text {
  transition: all 0.3s ease;
  opacity: 1;
  max-height: 40px;
}

.card:hover .icon {
  background-position: -120px;
  transition: all 0.3s ease;
}

.card:hover .icon svg path {
  fill: url('#gradientColor');
  transition: all 0.3s ease;
}
</style>
    </head>
<div class="card">
  <div class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="38px" width="38px" version="1.1" id="heart" viewBox="0 0 471.701 471.701" xml:space="preserve">
      <linearGradient id="gradientColor">
        <stop offset="5%" stop-color="#7eaaff"></stop>
        <stop offset="95%" stop-color="#ff48fb"></stop>
      </linearGradient>
      <g>
        <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
      </g>
    </svg>
  </div>
  <p class="title">Revision &<br>Optimization</p>
  <p class="text">Continuous refinement and enhancement.</p>
</div>

</html>`}
                ></Script>
              </div>
            </div>
          </div>
          <section className="home-empty1">
            <a href="#test" className="home-link1">
              <PrimaryPinkButton
                button="Scroll to Next"
                rootClassName="primary-pink-button-root-class-name2"
                className="home-component3"
              ></PrimaryPinkButton>
            </a>
          </section>
        </div>
      </section>
      <section id="test" className="home-testimonials">
        <div className="home-container17">
          <div className="home-container18">
            <h2 className="home-text048">A Website is an Investment</h2>
            <p className="home-text049">
              <span className="home-text050">Transparent &amp; Reliable</span>
              <span className="home-text051">
                {' '}
                pricing plans for
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text052">EFFECTIVE BUSINESS Growth</span>
            </p>
            <p className="home-text053">
              <span className="home-text054">
                Each plan is an
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text055">investment</span>
              <span className="home-text056">
                {' '}
                in
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text057">your brand’s future</span>
              <span className="home-text058">
                , designed to offer scalable
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text059">solutions</span>
              <span className="home-text060">
                {' '}
                as you
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text061">grow</span>
              <span className="home-text062">
                {' '}
                and with each plan we
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text063">guarantee you highest </span>
              <span className="home-text064">ROI</span>
              <span className="home-text065">! </span>
            </p>
            <img
              alt="image"
              src="/My uploads/asset%201%20copy-1500h.png"
              className="home-image"
            />
            <p className="home-text066 Small">      Founder | Digital Guide</p>
            <section className="home-empty2">
              <div className="home-container19">
                <a
                  href="#sec3"
                  className="home-button ButtonSmall newbutton button"
                >
                  Scroll to Next
                </a>
              </div>
            </section>
          </div>
          <div className="home-container20"></div>
          <div className="home-logos">
            <div className="home-container21">
              <div className="home-container22">
                <div className="home-container23">
                  <img
                    alt="image"
                    src="/logo-asana.svg"
                    className="home-image01"
                  />
                </div>
                <div className="home-container24">
                  <img
                    alt="image"
                    src="/logo-slack.svg"
                    className="home-image02"
                  />
                </div>
                <div className="home-container25">
                  <img
                    alt="image"
                    src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                    className="home-image03"
                  />
                </div>
              </div>
              <div className="home-container26">
                <div className="home-container27">
                  <img
                    alt="image"
                    src="/logo-shopify.svg"
                    className="home-image04"
                  />
                </div>
                <div className="home-container28">
                  <img
                    alt="image"
                    src="/favicon%20new-200h.png"
                    className="home-image05"
                  />
                </div>
                <div className="home-container29">
                  <img
                    alt="image"
                    src="/logo-invision.svg"
                    className="home-image06"
                  />
                </div>
              </div>
              <div className="home-container30">
                <div className="home-container31">
                  <img
                    alt="image"
                    src="/logo-attlasian.svg"
                    className="home-image07"
                  />
                </div>
                <div className="home-container32">
                  <img
                    alt="image"
                    src="/logo-weave.svg"
                    className="home-image08"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/My uploads/bottom1.svg"
          className="home-bottom-wave-image"
        />
        <img alt="image" src="/waves-white.svg" className="home-image09" />
        <img
          alt="image"
          src="/My uploads/top1.svg"
          className="home-top-wave-image"
        />
      </section>
      <section id="sec3" className="home-container33">
        <div className="home-container34">
          <h1 className="home-text067">
            <span>Our Process</span>
            <br></br>
            <span>Your Progress</span>
          </h1>
          <span className="home-text071">
            <span>
              Now is the time to act! With Digital Guide by your side, the
              horizon is not the limit but just the beginning. Connect with us
              and set sail towards your digital future.
            </span>
            <br></br>
          </span>
        </div>
        <div className="home-stats">
          <div className="home-stat">
            <h1 className="home-text074">55+</h1>
            <span className="home-text075">Delighted clients ツ</span>
            <span className="home-text076">
              <span>Your Happiness, Our Priority</span>
              <br></br>
              <span>~ Crafting Smiles with Every Project~</span>
            </span>
          </div>
          <div className="home-stat1">
            <h1 className="home-text080">+35%</h1>
            <span className="home-text081">Annual Growth Rate</span>
            <span className="home-text082">
              <span>Your Success, Our Mission</span>
              <br></br>
              <span>~Growing Together, Year After Year~</span>
            </span>
          </div>
          <div className="home-stat2">
            <h1 className="home-text086">100+</h1>
            <span className="home-text087">Successful Projects</span>
            <span className="home-text088">
              <span>Tailored for You</span>
              <br></br>
              <span>~Bringing Your Vision to Life, Every Time~</span>
            </span>
          </div>
          <div className="home-stat3">
            <h1 className="home-text092">
              <span>24/7</span>
              <br></br>
            </h1>
            <span className="home-text095">Customer Support</span>
            <span className="home-text096">
              <span>Your Peace of Mind, Our Commitment</span>
              <br></br>
              <span>~Support That&apos;s Always There for You~</span>
            </span>
          </div>
        </div>
      </section>
      <div id="price" className="home-pricing"></div>
      <div className="home-steps"></div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
