import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import OutlineBlueButton from '../components/outline-blue-button'
import NextButton from '../components/next-button'
import PrimaryBlueButton from '../components/primary-blue-button'
import Footer from '../components/footer'
import './connect.css'

const Connect = (props) => {
  return (
    <div className="connect-container">
      <Helmet>
        <title>Connect - Digital Guide</title>
        <meta
          name="description"
          content="Unlock your online potential with Digital Guide - your expert partner in cutting-edge web development and innovative digital solutions."
        />
        <meta property="og:title" content="Connect - Digital Guide" />
        <meta
          property="og:description"
          content="Unlock your online potential with Digital Guide - your expert partner in cutting-edge web development and innovative digital solutions."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d1dafcde-584e-4366-9fed-9f8f41cceb67/5114a9a5-cd72-4944-b426-7da0b7160025?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="connect-container01">
        <div className="connect-profile">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxjYXJ0b29uJTIwYXZhdGFyfGVufDB8fHx8MTcxMDQwODE3Mnww&amp;ixlib=rb-4.0.3&amp;w=200"
            className="connect-image"
          />
          <div className="connect-container02">
            <div className="connect-container03">
              <h4 className="connect-text">Thiwanka L.C - ICT/21/932</h4>
              <a
                href="mailto:ict21932@fot.sjp.ac.lk?subject="
                className="connect-link"
              >
                <OutlineBlueButton
                  button="Connect"
                  rootClassName="outline-blue-button-root-class-name"
                  className="connect-component01"
                ></OutlineBlueButton>
              </a>
            </div>
            <span className="connect-text01">
              Thiwanka is renowned for her innovative approach to React
              development, blending creativity with technical expertise to push
              the boundaries of web design.
            </span>
            <NextButton button="More about me"></NextButton>
          </div>
        </div>
        <div className="connect-profile1">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1691137217619-7f9db4adc169?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxjYXJ0b29uJTIwYXZhdGFyfGVufDB8fHx8MTcxMDQwODE3Nnww&amp;ixlib=rb-4.0.3&amp;w=200"
            className="connect-image1"
          />
          <div className="connect-container04">
            <div className="connect-container05">
              <h4 className="connect-text02">Kloshani - ICT/21/874</h4>
              <a
                href="mailto:ict21874@fot.sjp.ac.lk?subject="
                className="connect-link1"
              >
                <OutlineBlueButton
                  button="Connect"
                  rootClassName="outline-blue-button-root-class-name1"
                  className="connect-component03"
                ></OutlineBlueButton>
              </a>
            </div>
            <span className="connect-text03">
              With an eye for detail and a passion for perfection, Kloshani
              transforms complex designs into stunning, user-friendly websites.
            </span>
            <NextButton button="More about me"></NextButton>
          </div>
        </div>
        <div className="connect-profile2">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1614583225154-5fcdda07019e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGNhcnRvb24lMjBnaXJsfGVufDB8fHx8MTcxMDQwODI0MXww&amp;ixlib=rb-4.0.3&amp;w=200"
            className="connect-image2"
          />
          <div className="connect-container06">
            <div className="connect-container07">
              <h4 className="connect-text04">
                M.S. Sidhdhika Banu - ICT/21/814
              </h4>
              <a
                href="mailto:ict21814@fot.sjp.ac.lk?subject="
                className="connect-link2"
              >
                <OutlineBlueButton
                  button="Connect"
                  rootClassName="outline-blue-button-root-class-name2"
                  className="connect-component05"
                ></OutlineBlueButton>
              </a>
            </div>
            <span className="connect-text05">
              Sidhdhika excels in bridging the gap between frontend and backend,
              delivering seamless and robust web solutions.
            </span>
            <NextButton button="More about me"></NextButton>
          </div>
        </div>
        <div className="connect-profile3">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMwfHxjYXJ0b29uJTIwZ2lybHxlbnwwfHx8fDE3MTA0MDgyNTV8MA&amp;ixlib=rb-4.0.3&amp;w=200"
            className="connect-image3"
          />
          <div className="connect-container08">
            <div className="connect-container09">
              <h4 className="connect-text06">NF. Hafsa - ICT/21/846</h4>
              <a
                href="mailto:ict21846@fot.sjp.ac.lk?subject="
                className="connect-link3"
              >
                <OutlineBlueButton
                  button="Connect"
                  rootClassName="outline-blue-button-root-class-name3"
                  className="connect-component07"
                ></OutlineBlueButton>
              </a>
            </div>
            <span className="connect-text07">
              Hafsa combines her deep understanding of user behavior with her
              design skills to create intuitive and engaging digital
              experiences.
            </span>
            <NextButton button="More about me"></NextButton>
          </div>
        </div>
        <div className="connect-profile4">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc0fHxjYXJ0b29uJTIwZ2lybHxlbnwwfHx8fDE3MTA0MDgyNzJ8MA&amp;ixlib=rb-4.0.3&amp;w=200"
            className="connect-image4"
          />
          <div className="connect-container10">
            <div className="connect-container11">
              <h4 className="connect-text08">M.S.F Sameerah - ICT/21/911</h4>
              <OutlineBlueButton
                button="Connect"
                rootClassName="outline-blue-button-root-class-name4"
                className="connect-component09"
              ></OutlineBlueButton>
            </div>
            <span className="connect-text09">
              <span>
                {' '}
                Sameerah&apos;s expertise in server-side technologies ensures
                the agency&apos;s projects are scalable, efficient, and secure,
                laying a solid foundation for innovation.
              </span>
              <br></br>
              <br></br>
            </span>
            <NextButton button="More about me"></NextButton>
          </div>
        </div>
      </div>
      <div className="connect-contact">
        <div className="connect-container12">
          <div className="connect-form">
            <h2 className="connect-text13 HeadingOne">Say Hello!</h2>
            <span className="connect-text14 Medium">
              <span>Let&apos;s Start a Conversation &amp;</span>
              <br></br>
              <span>Elevate Your Business Together!</span>
            </span>
            <form className="connect-form1">
              <label className="connect-text18 Label">My name is</label>
              <input
                type="text"
                placeholder="What's your Name?"
                className="connect-textinput Small input"
              />
              <label className="connect-text19 Label">
                I&apos;m looking for
              </label>
              <input
                type="text"
                rows="What's your plan? ツ "
                placeholder="What's your plan? ✨ "
                className="connect-textinput1 Small input"
              />
              <label className="connect-text20 Label">Your message</label>
              <textarea
                rows="8"
                target="I'd like a website developed for my business..."
                placeholder="I'd like a website developed for my business.."
                className="connect-textarea textarea Small"
              ></textarea>
            </form>
            <div className="connect-container13">
              <div className="connect-container14">
                <PrimaryBlueButton button="send message"></PrimaryBlueButton>
              </div>
            </div>
          </div>
          <div className="connect-info">
            <div className="connect-container15">
              <h3 className="HeadingTwo">
                <span>
                  Contact
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Information</span>
              </h3>
              <span className="connect-text24">
                Fill up the form and our Team will get back to you within few
                hours.
              </span>
              <div className="connect-container16">
                <div className="connect-container17">
                  <svg viewBox="0 0 1024 1024" className="connect-icon">
                    <path d="M742 460l-94-94q-18-18-10-44 24-72 24-152 0-18 12-30t30-12h150q18 0 30 12t12 30q0 300-213 513t-513 213q-18 0-30-12t-12-30v-150q0-18 12-30t30-12q80 0 152-24 24-10 44 10l94 94q186-96 282-282z"></path>
                  </svg>
                  <a href="tel:+94 78 303 6891" className="connect-link4 Small">
                    (+94) 78 303 6891
                  </a>
                </div>
                <div className="connect-container18">
                  <svg viewBox="0 0 1024 1024" className="connect-icon02">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <a
                    href="mailto:hello@digitalguide.web.lk?subject=Web Development Project"
                    className="connect-link5"
                  >
                    hello@digitalguide.web.lk
                  </a>
                </div>
                <div className="connect-container19">
                  <svg viewBox="0 0 1024 1024" className="connect-icon04">
                    <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                  </svg>
                  <span className="connect-text25">
                    <span>Digital Guide Inc.</span>
                    <br></br>
                    <span>Pitipana North,</span>
                    <br></br>
                    <span>Homagama, Colombo</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="connect-container20">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="connect-icon06"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="connect-icon08"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="connect-icon10"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </div>
            </div>
            <img alt="image" src="/wave-1.svg" className="connect-image5" />
            <div className="connect-container21"></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Connect
