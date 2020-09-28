import React from 'react'
import PropTypes from 'prop-types'

const StockCard = ({ label = 'This a Card', classes }) => {
  return (
    <div className={`pa1 ${classes}`}>
      <div className="flex justify-between">
        <span>{ label }</span>
        <span>Ok</span>
      </div>
    </div>
  )
}

StockCard.propTypes = {
  label: PropTypes.string.isRequired,
  classes: PropTypes.string
}

export default StockCard
