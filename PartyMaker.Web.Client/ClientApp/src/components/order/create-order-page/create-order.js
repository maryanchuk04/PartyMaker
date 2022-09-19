import React, { useState } from 'react'
import AccordionItem from '../components/AccordionItem'
import Item from '../components/Item';

const CreateOrder = () => {
    const [accordionState, setAccordionState] = useState([]);

    function handleAdd(new_element){
        setAccordionState(prev=>([...prev, new_element]))
    }

  return (
    <div className = "container">
        <h1 className = 'text-center my-2'>Create new order</h1>
        {
            accordionState?.map(()=>(
                <AccordionItem title = {"Maks"}><Item/></AccordionItem>
            ))   
        }
        <button onClick = {handleAdd}>Add</button>
    </div>
  )
}

export default CreateOrder