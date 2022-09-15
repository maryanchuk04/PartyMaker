import React from 'react'
import './button.css'

const SampleButton = (props) => {
  const {children, onClick, type} = props;
  return <button type = {type} onClick = {onClick} className = 'sample-button'>
      {children}
  </button>
}

export default SampleButton