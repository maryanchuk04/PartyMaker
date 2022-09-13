import React from 'react'
import './button.css'

const SampleButton = (props) => {
  const {children, onClick} = props;
  return <button onClick = {onClick} className = 'sample-button'>
      {children}
  </button>
}

export default SampleButton