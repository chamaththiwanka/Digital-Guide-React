import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-container">
        <div className="footer-container1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="footer-image"
          />
        </div>
        <span className="footer-text">{props.text}</span>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  imageAlt: 'image',
  imageSrc1:
    'https://images.unsplash.com/photo-1603118675111-239b194fb8d8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIwMnx8cHVycGxlfGVufDB8fHx8MTcwODEyMjI0OXww&ixlib=rb-4.0.3&w=200',
  imageAlt1: 'image',
  rootClassName: '',
  imageSrc: '/My uploads/looooogo.svg',
  text: 'Copyright © 2024 Digital Guide',
}

Footer.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  text: PropTypes.string,
}

export default Footer
