import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ label = 'This a Button', classes, onClick = () => {}, disabled = false }) => {
  return (
    <button className={`pa1 ${classes}`} onClick={onClick} disabled={disabled}>
      { label }
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  classes: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

export default Button
