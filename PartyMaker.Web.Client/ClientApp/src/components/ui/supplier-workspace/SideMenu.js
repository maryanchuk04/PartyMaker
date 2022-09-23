import { Paper, MenuList, MenuItem, Stack } from '@mui/material';
import React, { useState, useEffect } from 'react'

import Page from "../../pages/supplier-workspace/supplier-workspace";
import '../../pages/supplier-workspace/supplier-workspace.css'

const SupplierWorkspace = () => {

    let tags = ['Active', 'Requests', 'Finished'];

    const [state, setState] = useState(0);
    const handleSelectPage = (selectedPageId) => {
        setState(selectedPageId);
    };

    const getActivePage = () => {
        return <Page id={state} />;
    };

    return (
        <div className="container h-100">
            <h1 >Workspace</h1>
            <Stack direction="row" className="h-100" spacing={2}>
                <Paper className="menu"style = {{height : "fit-content"}}>
                    <MenuList>
                        {
                            tags?.map((tag,index) => (
                                <MenuItem selected ={index === state} onClick={() => handleSelectPage(tags.indexOf(tag))}>{tag}</MenuItem>
                            ))
                        }
                    </MenuList>
                </Paper>

                <Paper className="paper-info w-100 h-100 p-2" style = {{overflowY: "scroll"}} >
                    {getActivePage()}
                </Paper>

            </Stack>
        </div>
    );
}
export default SupplierWorkspace
