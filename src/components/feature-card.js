import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className={`feature-card-container ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="feature-card-image"
      />
      <h5 className="feature-card-text HeadingThree">{props.newProp}</h5>
      <span className="feature-card-text1">{props.text}</span>
    </div>
  )
}

FeatureCard.defaultProps = {
  rootClassName: '',
  imageSrc: '/rocket1.svg',
  imageAlt: 'image',
  text: 'Get the latest design ideas and turn it into reality.',
  newProp: 'Design',
}

FeatureCard.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  newProp: PropTypes.string,
}

export default FeatureCard
