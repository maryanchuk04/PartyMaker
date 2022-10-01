import React, {useState} from "react";
import { Tabs, Tab } from "@mui/material";
const TabsWrapper = ({ items, value = 0, setValue }) => {
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
      };
  return (
    <Tabs
      value={value}
      variant="fullWidth"
      onChange={handleChange}
      aria-label="basic tabs example"
      scrollButtons="auto"
      sx = {{height : "5%"}}
    >
      {items.map((item, index) => (
        <Tab label={`Service ${index + 1}`} />
      ))}
    </Tabs>
  );
};

export default TabsWrapper;
