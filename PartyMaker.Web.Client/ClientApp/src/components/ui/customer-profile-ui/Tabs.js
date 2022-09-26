import React , {useState}from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ContentTable from './ContentTable'

const Tabs = () => {

    const [value, setValue] = useState('1');
    
    let status = ['Active', 'Pending', 'Finished']
    ;
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };


      return(
        
        <Box className="my-5" sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList variant="fullWidth" onChange={handleChange} >
              <Tab label="Active orders(In progress)" value="1" />
              <Tab label="Pending orders" value="2" />
              <Tab label="Finished orders" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ContentTable></ContentTable>
          </TabPanel>
          <TabPanel value="2">
          <ContentTable></ContentTable>
          </TabPanel>
          <TabPanel value="3">
          <ContentTable></ContentTable>
          </TabPanel>
        </TabContext>
      </Box>
      )
}

export default Tabs;