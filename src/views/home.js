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
          newProp="Guaranteed Strategic Growth Support"
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
      <div className="home-steps">
        <h1 className="home-text071">
          <span>Discover Our Process</span>
        </h1>
        <span className="home-text073">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <br></br>
          <span></span>
        </span>
        <div className="home-container23">
          <div className="home-step">
            <div className="home-container24">
              <div className="home-line"></div>
              <div className="home-container25">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                </svg>
              </div>
              <div className="home-line1"></div>
            </div>
            <div className="home-container26">
              <h1 className="home-text076">
                <span>Ideate</span>
              </h1>
              <span className="home-text078">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className="home-step1">
            <div className="home-container27">
              <div className="home-line2"></div>
              <div className="home-container28">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                </svg>
              </div>
              <div className="home-line3"></div>
            </div>
            <div className="home-container29">
              <h1 className="home-text081">
                <span>Design</span>
              </h1>
              <span className="home-text083">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className="home-step2">
            <div className="home-container30">
              <div className="home-line4"></div>
              <div className="home-container31">
                <svg viewBox="0 0 1024 1024" className="home-icon4">
                  <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                  <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                </svg>
              </div>
              <div className="home-line5"></div>
            </div>
            <div className="home-container32">
              <h1 className="home-text086">
                <span>Develop</span>
              </h1>
              <span className="home-text088">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className="home-step3">
            <div className="home-container33">
              <div className="home-line6"></div>
              <div className="home-container34">
                <svg viewBox="0 0 1024 1024" className="home-icon7">
                  <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                </svg>
              </div>
              <div className="home-line7"></div>
            </div>
            <div className="home-container35">
              <h1 className="home-text091">
                <span>Deploy</span>
              </h1>
              <span className="home-text093">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-container36">
          <div className="home-pricing-card">
            <span className="home-text096">
              <span className="home-text097">Starter</span>
              <br></br>
            </span>
            <div className="home-container37">
              <span className="home-text099">LKR</span>
              <span className="home-text100">
                <span className="home-text101"> </span>
                <span>1200</span>
              </span>
              <span className="home-text103">/ monthly</span>
            </div>
            <span className="home-text104">LKR 5,000/- Initial Payment</span>
            <div className="home-container38">
              <span className="home-text105">✔ .LK domain</span>
              <span className="home-text106">
                <span>✔ Publish with Teleport</span>
              </span>
              <span className="home-text108">
                <span>✔ Subdomain publish</span>
              </span>
              <span className="home-text110">
                <span>✔ Download code</span>
              </span>
            </div>
            <button className="home-button button">Learn More</button>
          </div>
          <div className="home-pricing-card1">
            <span className="home-text112">Recommended</span>
            <div className="home-container39">
              <span className="home-text113">LKR</span>
              <span className="home-text114"> 1500</span>
              <span className="home-text115">/ monthly</span>
            </div>
            <span className="home-text116">LKR 5,000/- Initial Payment</span>
            <div className="home-container40">
              <span className="home-text117">
                <span>✔ All features of FREE plan</span>
              </span>
              <span className="home-text119">
                <span>✔ Connect to custom domains</span>
              </span>
              <span className="home-text121">
                <span>✔ Private projects</span>
              </span>
              <span className="home-text123">
                <span>✔ No project limitations</span>
              </span>
              <span className="home-text125">
                <span>✔ Unlimited collabotators</span>
              </span>
            </div>
            <button className="home-button1 button">Learn More</button>
          </div>
          <div className="home-pricing-card2">
            <span className="home-text127">Premium</span>
            <div className="home-container41">
              <span className="home-text128">LKR</span>
              <span className="home-text129"> 3000</span>
              <span className="home-text130">
                <span>/ monthly</span>
              </span>
            </div>
            <span className="home-text132">LKR 10,000/- Initial Payment</span>
            <div className="home-container42">
              <span className="home-text133">
                <span>✔ All features of BASIC plan</span>
              </span>
              <span className="home-text135">
                <span>✔ Priority support</span>
              </span>
              <span className="home-text137">
                <span>✔ Premium analytics</span>
              </span>
              <span className="home-text139">
                <span>✔ Version history</span>
              </span>
            </div>
            <button className="home-button2 button">Learn More</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
