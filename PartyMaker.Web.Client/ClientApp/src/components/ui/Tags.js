import React from 'react'

const Tags = ({array, count = array.length}) => {
  return <>
    {
        array?.slice(0,count).map((elem)=>(
        <h6 className = "col flex-grow-0 text-uppercase m-1 px-1 text-dark rounded d-flex align-items-center" style = {{background:"#ffd80b"}}>#{elem}</h6>
        )) 
    }
    {array?.length > count ? <h6>...</h6> : null}
    </>
}

export default Tags