import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Input = ({
  name,
  value,
  type,
  maxlength,
  placeholder,
  classes,
  inputClasses,
  disabled,
  handleChange,
  error,
  errorClass
}) => {
  const onChange = e => {
    handleChange(e.target)
  }

  return (
    <div className={`f16 lh22 text-light-black ${classes}`}>
      { placeholder && <div className="mb8">{ placeholder }</div> }
      <input
        name={name}
        value={value}
        className={`border-all-grey ph8 ${inputClasses}`}
        type={type}
        maxLength={maxlength}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
      {
        error && (
          <div className={`pos-rel mb32 ${errorClass}`}>
            <div className="flex align-center bg-grey lh20 f14 pv10 ph8 hauto error">
              { error }
            </div>
          </div>
        )
      }
    </div>
  )
}

Input.defaultProps = {
  classes: '',
  inputClasses: '',
  error: '',
  errorClass: ''
}

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  maxlength: PropTypes.number,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
  inputClasses: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  errorClass: PropTypes.string,
  handleChange: PropTypes.func
}

export default memo(Input)
