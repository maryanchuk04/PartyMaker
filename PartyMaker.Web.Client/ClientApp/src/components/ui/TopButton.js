import React from 'react'
import './topButton.css'
const TopButton = ({handleScrollUp, showButton}) => {
    
  return <button id = "top-button" onClick = {handleScrollUp}  style = {{ opacity : showButton ? "1" : "0"}}>
      <i className = "fas fa-arrow-up"></i>
  </button>
}

export default TopButton