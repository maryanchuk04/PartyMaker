import React, { useState } from 'react'
import { Button, IconButton } from '@mui/material';
import AccordionItem from '../components/AccordionItem'
import Item from '../components/Item';
import useMedia from 'use-media';

const CreateOrder = () => {
    const [accordionState, setAccordionState] = useState([]);
    const media = useMedia({maxWidth : 430});
    function handleAdd(new_element){
        setAccordionState(prev=>([...prev, new_element]))
    }

    function handleCancel(){
        setAccordionState([]);
    }
  return (
    <div className = "container pb-5">
        <h1 className = 'text-center my-2'>Create new order</h1>
        <div className="d-flex justify-content-between align-items-center my-4">
            {
                !media ? <Button endIcon = {<i className = "fas fa-plus"></i>} variant = 'contained' onClick={handleAdd}>Add service</Button>
                : <IconButton color= "primary" onClick={handleAdd}><i className = "fas fa-plus"></i></IconButton>

            }
            <div className = 'd-flex justify-content-end' >
                <Button onClick = {handleCancel} >Cancel</Button>
                <Button variant = 'contained' sx={{marginLeft: "20px"}}>Create order</Button>
            </div>
        </div>
        {
            accordionState.length === 0 ? 
            <div className = 'text-center'>
                <p className = "display-5 fst-italic">
                    Please create your order
                </p>
                
            </div>:
                accordionState?.map((elem, index)=>(
                    <AccordionItem title = {`Service ${index+1}`}><Item/></AccordionItem>
                ))   
        }
        
    </div>
  )
}

export default CreateOrder