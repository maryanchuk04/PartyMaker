import React from 'react'
import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';

const AccordionItem = ({children, title}) => {
  return <Accordion sx={{boxShadow : " 0 3px 10px rgb(0 0 0 / 0.4)", }}>
        <AccordionSummary
          expandIcon={<i className = "fas fa-arrow-down"></i>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{  flexShrink: 0 }}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {children}
          </Typography>
        </AccordionDetails>
      </Accordion>
  
}

export default AccordionItem