import React, {useEffect, useState} from "react";
import { Tabs, Tab } from "@mui/material";
const TabsWrapper = ({ items, value, setValue }) => {
    useEffect(()=>{
      console.log(items)
      console.log(items[0].itemRequestDtos[0]?.supplierService.service.name)
    },[])
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
        <Tab label={item.itemRequestDtos[0]?.supplierService?.service.name} />
      ))}
    </Tabs>
  );
};

export default TabsWrapper;
