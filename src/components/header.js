import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className={`header-header ${props.rootClassName} `}>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink Large">
            Digital Guide
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu">
            <Link to="/" className="header-navlink1 Large">
              Home
            </Link>
            <Link to="/connect" className="header-navlink2 Large">
              Profile
            </Link>
            <Link to="/coming-soon" className="header-navlink3 Large">
              Coming Soon
            </Link>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton button="buy now" className=""></PrimaryPinkButton>
        </div>
      </div>
      <nav className="header-nav">
        <div className="header-container">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="header-image"
          />
          <Link to="/" className="header-navlink4 Large">
            Digital Guide
          </Link>
        </div>
        <div data-role="BurgerMenu" className="header-burger-menu">
          <svg viewBox="0 0 1024 1024" className="header-icon2">
            <path
              d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
              className=""
            ></path>
          </svg>
        </div>
        <div className="header-menu1">
          <Link to="/" className="header-link">
            Home
          </Link>
          <Link to="/coming-soon" className="header-navlink5">
            Why choose us?
          </Link>
          <Link to="/plans" className="header-navlink6">
            Plans for you!
          </Link>
          <Link to="/connect" className="header-navlink7">
            Connect
          </Link>
          <a href="tel:+94 78 303 6891" className="header-link1">
            <PrimaryPinkButton
              button="Start now!"
              rootClassName="primary-pink-button-root-class-name"
              className="header-component1"
            ></PrimaryPinkButton>
          </a>
        </div>
      </nav>
      <header data-role="Header" className="header-header1">
        <span className="header-text">{props.text}</span>
      </header>
    </div>
  )
}

Header.defaultProps = {
  rootClassName: '',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt: 'image',
  imageAlt1: 'image',
  imageSrc1: '/favicon%20new-1500h.png',
  text: 'Text',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  text: PropTypes.string,
}

export default Header
