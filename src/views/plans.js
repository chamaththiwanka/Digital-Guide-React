import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import Footer from '../components/footer'
import './plans.css'

const Plans = (props) => {
  return (
    <div className="plans-container">
      <Helmet>
        <title>Plans - Digital Guide</title>
        <meta
          name="description"
          content="Unlock your online potential with Digital Guide - your expert partner in cutting-edge web development and innovative digital solutions."
        />
        <meta property="og:title" content="Plans - Digital Guide" />
        <meta
          property="og:description"
          content="Unlock your online potential with Digital Guide - your expert partner in cutting-edge web development and innovative digital solutions."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d1dafcde-584e-4366-9fed-9f8f41cceb67/5114a9a5-cd72-4944-b426-7da0b7160025?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <div id="top" className="plans-hero">
        <div className="plans-container01">
          <div className="plans-container02">
            <div className="plans-card">
              <h1 className="plans-text">Choose Your Adventure,</h1>
              <h1 className="plans-text01">Tailored Plans for Every Journey</h1>
              <span className="plans-text02">
                <span>
                  Embark on a digital expedition with our carefully crafted
                  pricing plans,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="plans-text04">
                  each designed to match your unique needs and aspirations
                </span>
                <span>
                  . Whether you&apos;re taking your first steps into the online
                  world or ready to conquer new heights, our packages offer the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="plans-text06">
                  perfect blend of features, support, and value
                </span>
                <span>.</span>
                <br></br>
              </span>
              <div className="plans-container03">
                <div className="plans-container04">
                  <a href="#price" className="plans-link">
                    <PrimaryPinkButton
                      button="Scroll to Next"
                      className="plans-component1"
                    ></PrimaryPinkButton>
                  </a>
                </div>
                <OutlineGrayButton
                  button="Find more"
                  rootClassName="outline-gray-button-root-class-name2"
                ></OutlineGrayButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="price" className="plans-pricing">
        <div className="plans-container05">
          <div className="plans-container06">
            <div className="plans-card1">
              <span className="plans-text09">
                <span>Starter</span>
                <br></br>
              </span>
              <div className="plans-container07">
                <span className="plans-text12">LKR</span>
                <span className="plans-text13">1200</span>
                <span className="plans-text14">/ monthly</span>
              </div>
              <span className="plans-text15">
                <span>Initial Payment:</span>
                <br></br>
                <br></br>
                <span>Development Payment: LKR 4,000</span>
                <br></br>
                <span> Domain Name Payment: LKR 5,000</span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Total: LKR 9,000</span>
                <br></br>
              </span>
              <div className="plans-container08">
                <span className="plans-text27">✔ .LK Domain Registration</span>
                <span className="plans-text28">✔ Up to 4 Custom pages </span>
                <span className="plans-text29">
                  ✔ Backups &amp; Advanced Security
                </span>
                <span className="plans-text30">✔ Social Media Integration</span>
                <span className="plans-text31">✔ Highly Responsive design</span>
                <span className="plans-text32">✔ UI/UX Best Practices</span>
                <span className="plans-text33">✔ SEO optimization</span>
                <span className="plans-text34">
                  ✔ Loading Speed Optimization
                </span>
                <span className="plans-text35">✔ Cloudflare integration </span>
              </div>
              <button className="plans-button button">Learn More</button>
            </div>
            <div className="plans-card2">
              <span className="plans-text36">Recommended</span>
              <div className="plans-container09">
                <span className="plans-text37">LKR</span>
                <span className="plans-text38">1500</span>
                <span className="plans-text39">/ monthly</span>
              </div>
              <span className="plans-text40">
                <span>Initial Payment:</span>
                <br></br>
                <br></br>
                <span>Development Payment: LKR 5,000</span>
                <br></br>
                <span>
                  Domain Name Payment: LKR 5,000
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span> Total: LKR 10,000</span>
                <br></br>
              </span>
              <div className="plans-container10">
                <span className="plans-text51">
                  ✔ All features of Starter plan
                </span>
                <span className="plans-text52">✔ Up to Custom 6 pages</span>
                <span className="plans-text53">✔ Dedicated hosting</span>
                <span className="plans-text54">✔ Custom Email Address</span>
                <span className="plans-text55">
                  <span>✔ Basic E-Commerce Functionalities</span>
                  <br></br>
                </span>
                <span className="plans-text58">
                  <span>✔ Advanced SEO Strategies</span>
                  <br></br>
                </span>
                <span className="plans-text61">
                  <span>✔ Email Marketing Setup</span>
                  <br></br>
                </span>
                <span className="plans-text64">
                  <span>✔ Google Analytics Integration</span>
                  <br></br>
                </span>
                <span className="plans-text67">
                  <span>
                    ✔ Priority support
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
                <span className="plans-text70">
                  <span>✔ Google Business Integration</span>
                  <br></br>
                </span>
              </div>
              <button className="plans-button1 button">Learn More</button>
            </div>
            <div className="plans-card3">
              <span className="plans-text73">Premium</span>
              <div className="plans-container11">
                <span className="plans-text74">LKR</span>
                <span className="plans-text75">3000</span>
                <span className="plans-text76">
                  <span>/ monthly</span>
                </span>
              </div>
              <span className="plans-text78">
                <span>Initial Payment:</span>
                <br></br>
                <br></br>
                <span>Development Payment: LKR 10,000</span>
                <br></br>
                <span>Domain Name Payment: LKR 5,000</span>
                <br></br>
                <br></br>
                <span>Total: LKR 15,000</span>
              </span>
              <div className="plans-container12">
                <span className="plans-text88">
                  ✔ All features of Recommended plan
                </span>
                <span className="plans-text89">✔ Additional upto 10 pages</span>
                <span className="plans-text90">
                  ✔ Advanced e-commerce solutions
                </span>
                <span className="plans-text91">
                  ✔ Personalized SEO strategy
                </span>
                <span className="plans-text92">
                  ✔ Premium Analytics with Monthly Report
                </span>
                <span className="plans-text93">✔ Premium analytics</span>
                <span className="plans-text94">
                  ✔ 24/7 premium support
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="plans-text95">
                  ✔ Custom Feature Development
                </span>
                <span className="plans-text96">
                  ✔ Payment Gateway Integration
                </span>
                <span className="plans-text97">
                  ✔ Free International Domain Name
                </span>
              </div>
              <button className="plans-button2 button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="plans-steps"></div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Plans
