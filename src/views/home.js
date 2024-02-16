import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
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
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text HeadingOne">Beyond Pixels &amp; Code</h1>
            <h1 className="home-text001">Dreams in Digital World!</h1>
            <span className="home-text002">
              <span className="home-text003">
                Dive into a world where
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text004">creativity</span>
              <span className="home-text005">
                {' '}
                merges with digital precision,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text006">
                turning your
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text007">
                dreams into vibrant realities
              </span>
              <span className="home-text008">.</span>
              <span className="home-text009">
                {' '}
                Here,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text010">
                every pixel tells a
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text011">story</span>
              <span className="home-text012">
                , and every line of code is a
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text013">
                step towards
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text014">your vision coming to life</span>
              <span className="home-text015">.</span>
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <PrimaryPinkButton button="contact us"></PrimaryPinkButton>
              </div>
              <OutlineGrayButton button="read more"></OutlineGrayButton>
            </div>
          </div>
        </div>
        <img alt="image" src="/curved6-1500w.jpg" className="home-image" />
      </div>
      <section className="home-features">
        <FeatureCard
          text="Custom-fit web solutions that highlight your unique brand and goals."
          title="Components"
          newProp="Tailored Digital Experiences"
          imageSrc="/cube1.svg"
          rootClassName="feature-card-root-class-name"
        ></FeatureCard>
        <FeatureCard
          text="Advanced tools and methods to keep you ahead in the digital game."
          newProp="Cutting-Edge    Technologies"
          imageSrc="/rocket1.svg"
          rootClassName="feature-card-root-class-name1"
        ></FeatureCard>
        <FeatureCard
          text="Uninterrupted, personalized assistance ensuring your digital success."
          title="Less Code"
          newProp="Seamless Customer    Support"
          imageSrc="/person1.svg"
          rootClassName="feature-card-root-class-name2"
        ></FeatureCard>
        <FeatureCard
          text="Continuous guidance and strategies for enduring online success."
          title="Fully Responsive"
          newProp="Strategic Growth Support"
          imageSrc="/credit%20card1.svg"
          rootClassName="feature-card-root-class-name3"
        ></FeatureCard>
      </section>
      <section className="home-testimonials">
        <div className="home-container04">
          <div className="home-container05">
            <h2 className="home-text016">A Website is an Investment</h2>
            <p className="home-text017">
              <span className="home-text018">Transparent &amp; Reliable</span>
              <span className="home-text019">
                {' '}
                pricing plans for
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text020">EFFECTIVE BUSINESS Growth</span>
            </p>
            <p className="home-text021">
              <span className="home-text022">
                Each plan is an
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text023">investment</span>
              <span className="home-text024">
                {' '}
                in
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text025">your brand’s future</span>
              <span className="home-text026">
                , designed to offer scalable
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text027">solutions</span>
              <span className="home-text028">
                {' '}
                as you
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text029">grow</span>
              <span className="home-text030">
                {' '}
                and with each plan we
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text031">guarantee you highest </span>
              <span className="home-text032">ROI</span>
              <span className="home-text033">! </span>
            </p>
            <img
              alt="image"
              src="/My uploads/asset%201%20copy-1500h.png"
              className="home-image01"
            />
            <p className="home-text034 Small">      Founder | Digital Guide</p>
            <OutlineBlackButton
              button="Choose A Plan"
              rootClassName="outline-black-button-root-class-name"
            ></OutlineBlackButton>
          </div>
          <div className="home-container06"></div>
          <div className="home-logos">
            <div className="home-container07">
              <div className="home-container08">
                <div className="home-container09">
                  <img
                    alt="image"
                    src="/logo-asana.svg"
                    className="home-image02"
                  />
                </div>
                <div className="home-container10">
                  <img
                    alt="image"
                    src="/logo-slack.svg"
                    className="home-image03"
                  />
                </div>
                <div className="home-container11">
                  <img
                    alt="image"
                    src="/My uploads/reactlogo-200h.webp"
                    className="home-image04"
                  />
                </div>
              </div>
              <div className="home-container12">
                <div className="home-container13">
                  <img
                    alt="image"
                    src="/logo-shopify.svg"
                    className="home-image05"
                  />
                </div>
                <div className="home-container14">
                  <img
                    alt="image"
                    src="/favicon%20new-200h.png"
                    className="home-image06"
                  />
                </div>
                <div className="home-container15">
                  <img
                    alt="image"
                    src="/logo-invision.svg"
                    className="home-image07"
                  />
                </div>
              </div>
              <div className="home-container16">
                <div className="home-container17">
                  <img
                    alt="image"
                    src="/logo-attlasian.svg"
                    className="home-image08"
                  />
                </div>
                <div className="home-container18">
                  <img
                    alt="image"
                    src="/logo-weave.svg"
                    className="home-image09"
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
        <img alt="image" src="/waves-white.svg" className="home-image10" />
        <img
          alt="image"
          src="/My uploads/top1.svg"
          className="home-top-wave-image"
        />
      </section>
      <section className="home-container19">
        <div className="home-container20">
          <h1 className="home-text035">
            <span>
              Our Process,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Your Progress</span>
          </h1>
          <span className="home-text039">
            <span>
              A journey from
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text041">vision to reality</span>
            <span>, tailored for you!</span>
          </span>
          <img
            alt="image"
            src="/My uploads/white%20bg234%20copy-1500h.png"
            className="home-image11"
          />
        </div>
        <div className="home-container21">
          <div className="home-container22">
            <h2 className="home-text043">
              A well-made website significantly enhances a business&apos;s
              visibility, credibility, and sales potential!
            </h2>
            <p className="home-text044">
              <a
                href="https://www.careeraddict.com/business-website-benefits"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                84%
              </a>
              <span>
                {' '}
                of consumers believe
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text046">
                businesses with websites are more credible
              </span>
              <span>
                {' '}
                than those without, showcasing the
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text048">
                necessity of an online presence
              </span>
              <span> for credibility</span>
              <a
                href="https://www.careeraddict.com/business-website-benefits"
                target="_blank"
                rel="noreferrer noopener"
              >
                <br></br>
              </a>
              <span> </span>
              <br></br>
              <br></br>
              <a
                href="https://www.businessdit.com/statistics-about-website/"
                target="_blank"
                rel="noreferrer noopener"
              >
                A website&apos;s design
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </a>
              <span className="home-text054">
                significantly influences a company&apos;s credibility
              </span>
              <span>
                {' '}
                for
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text056">75%</span>
              <span>
                {' '}
                of users, underscoring the importance of a
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text058">professional online presence</span>
              <span>
                .
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://www.businessdit.com/statistics-about-website/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <br></br>
              </a>
              <br></br>
              <br></br>
              <span>
                Additionally, a website&apos;s
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text064">24/7 accessibility</span>
              <span className="home-text065">
                ,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text066">
                high reach, showcasing capabilities, enhanced customer service,
                and marketing potential
              </span>
              <span>
                {' '}
                are key to
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text068">business growth</span>
              <span>
                {' '}
                and
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text070">
                market presence establishment.
              </span>
            </p>
          </div>
        </div>
      </section>
      <div className="home-pricing">
        <div className="home-container23">
          <div className="home-card1">
            <span className="home-text071">
              <span>Starter</span>
              <br></br>
            </span>
            <div className="home-container24">
              <span className="home-text074">LKR</span>
              <span className="home-text075">
                <span className="home-text076"> </span>
                <span>1200</span>
              </span>
              <span className="home-text078">/ monthly</span>
            </div>
            <span className="home-text079">
              <span>Initial Payment:</span>
              <br></br>
              <span>- LKR 5,000 Development Payment</span>
              <br></br>
              <span>- LKR 5,000 LK Domain Name</span>
              <br></br>
              <span>Total = LKR 10,000/-</span>
              <br></br>
            </span>
            <div className="home-container25">
              <span className="home-text088">✔ .LK Domain Registration</span>
              <span className="home-text089">✔ Up to 4 Custom pages </span>
              <span className="home-text090">
                ✔ Backups &amp; Advanced Security
              </span>
              <span className="home-text091">✔ Social Media Integration</span>
              <span className="home-text092">✔ Responsive design</span>
              <span className="home-text093">✔ UI/UX Best Practices</span>
              <span className="home-text094">✔ SEO optimization</span>
              <span className="home-text095">✔ Loading Speed Optimization</span>
              <span className="home-text096">✔ Cloudflare integration </span>
            </div>
            <button className="home-button button">Learn More</button>
          </div>
          <div className="home-card2">
            <span className="home-text097">Recommended</span>
            <div className="home-container26">
              <span className="home-text098">LKR</span>
              <span className="home-text099"> 1500</span>
              <span className="home-text100">/ monthly</span>
            </div>
            <span className="home-text101">
              <span>Initial Payment:</span>
              <br></br>
              <span>- LKR 6,000 Development Payment</span>
              <br></br>
              <span>- LKR 5,000 LK Domain Name</span>
              <br></br>
              <span>Total = LKR 11,000/-</span>
              <br></br>
            </span>
            <div className="home-container27">
              <span className="home-text110">
                ✔ All features of Starter plan
              </span>
              <span className="home-text111">✔ Up to Custom 6 pages</span>
              <span className="home-text112">✔ Dedicated hosting</span>
              <span className="home-text113">✔ Custom Email Address</span>
              <span className="home-text114">
                <span>✔ Basic E-Commerce Functionalities</span>
                <br></br>
              </span>
              <span className="home-text117">
                <span>✔ Advanced SEO Strategies</span>
                <br></br>
              </span>
              <span className="home-text120">
                <span>✔ Email Marketing Setup</span>
                <br></br>
              </span>
              <span className="home-text123">
                <span>✔ Google Analytics Integration</span>
                <br></br>
              </span>
              <span className="home-text126">
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
              <span className="home-text129">
                <span>✔ Google Business Integration</span>
                <br></br>
              </span>
            </div>
            <button className="home-button1 button">Learn More</button>
          </div>
          <div className="home-card3">
            <span className="home-text132">Premium</span>
            <div className="home-container28">
              <span className="home-text133">LKR</span>
              <span className="home-text134"> 3000</span>
              <span className="home-text135">
                <span>/ monthly</span>
              </span>
            </div>
            <span className="home-text137">
              <span>Initial Payment:</span>
              <br></br>
              <span>- LKR 20,000 Development Payment</span>
              <br></br>
              <span>- LKR 5,000/ LK Domain Name</span>
              <br></br>
              <span>Total = LKR 25,000/-</span>
              <br></br>
            </span>
            <div className="home-container29">
              <span className="home-text146">
                ✔ All features of Recommended plan
              </span>
              <span className="home-text147">✔ Additional upto 10 pages</span>
              <span className="home-text148">
                ✔ Advanced e-commerce solutions
              </span>
              <span className="home-text149">✔ Personalized SEO strategy</span>
              <span className="home-text150">
                ✔ Premium Analytics with Monthly Report
              </span>
              <span className="home-text151">✔ Premium analytics</span>
              <span className="home-text152">
                ✔ 24/7 premium support
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text153">✔ Custom Feature Development</span>
              <span className="home-text154">
                ✔ Payment Gateway Integration
              </span>
              <span className="home-text155">
                ✔ Free International Domain Name
              </span>
            </div>
            <button className="home-button2 button">Learn More</button>
          </div>
        </div>
      </div>
      <div className="home-steps"></div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
