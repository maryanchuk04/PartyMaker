import React from 'react'
import Map from '../../../ui/map'
import DetailsField from '../components/DetailsField'

const DetailsContent = ({element}) => {

  return (
    <div className= 'h-100 w-100 py-2'>
        <div className = 'row' style = {{height : "30%"}}>
            <div className = "col w-50">
                <DetailsField label = {"Details"} defaultValue ={element.description}/>
            </div>
            <div className = 'col w-50'>
                <Map initCenter = {{lng : element?.adressDto?.longitude, lat : element?.adressDto?.latitude }}/>
                
            </div>
        </div>
        
    </div>
  )
}

export default DetailsContent