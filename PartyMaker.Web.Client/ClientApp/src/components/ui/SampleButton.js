import React from 'react'
import './button.css'

const SampleButton = (props) => {
  const {children, onClick, type, className} = props;
  return <button type = {type} onClick = {onClick} className = {`sample-button ${className}`}>
      {children}
  </button>
}

export default SampleButton