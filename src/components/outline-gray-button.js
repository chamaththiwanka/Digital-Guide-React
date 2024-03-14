import React from 'react'

import PropTypes from 'prop-types'

import './outline-gray-button.css'

const OutlineGrayButton = (props) => {
  return (
    <div className={`outline-gray-button-container ${props.rootClassName} `}>
      <button className="outline-gray-button-button button ButtonSmall">
        {props.button}
      </button>
    </div>
  )
}

OutlineGrayButton.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

OutlineGrayButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default OutlineGrayButton
