import React from 'react'

import PropTypes from 'prop-types'

import './hover-card.css'

const HoverCard = (props) => {
  return (
    <div className={`hover-card-container ${props.rootClassName} `}>
      <div
        data-text='"Check all your favourites in one place."'
        data-title='"Favourites"'
        data-icon-path='"M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"'
        className="hover-card-container1 card"
      >
        <div className="hover-card-container2 icon">
          <svg viewBox="0 0 1024 1024" className="hover-card-icon icon">
            <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM96 512c0-229.75 186.25-416 416-416 109.574 0 209.232 42.386 283.534 111.628l-411.534 176.372-176.372 411.534c-69.242-74.302-111.628-173.96-111.628-283.534zM585.166 585.166l-256.082 109.75 109.75-256.082 146.332 146.332zM512 928c-109.574 0-209.234-42.386-283.532-111.628l411.532-176.372 176.372-411.532c69.242 74.298 111.628 173.958 111.628 283.532 0 229.75-186.25 416-416 416z"></path>
          </svg>
        </div>
        <p className="hover-card-text title">{props.text152}</p>
        <p className="hover-card-text1 text">{props.text151}</p>
      </div>
    </div>
  )
}

HoverCard.defaultProps = {
  text152: 'Text',
  text151: 'Text',
  imageAlt: 'image',
  rootClassName: '',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

HoverCard.propTypes = {
  text152: PropTypes.string,
  text151: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default HoverCard
