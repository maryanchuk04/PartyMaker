import { Paper, MenuList, MenuItem, Stack } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { SupplierService } from '../../../services/SupplierService';

import Page from "../../pages/supplier-workspace/supplier-workspace";
import '../../pages/supplier-workspace/supplier-workspace.css'
import {getAuthState} from '../../../utils/helpers'
import { ClipLoader } from 'react-spinners';

const SupplierWorkspace = () => {
    const service = new SupplierService();
    const [loading, setLoading] = useState(false);
    let tags = ['Requests', 'Finished','Active'];
    const [array,setArray] = useState([]);
    const [state, setState] = useState(0);
    const handleSelectPage = (selectedPageId) => {
        setState(selectedPageId);
    };

    const getActivePage = () => {
        return <Page id={state} array = {array} />;
    };
    useEffect(()=>{
        (async()=>{
            setLoading(true);
           const res = await service.getSuppliersItems(getAuthState().supplierId, {
               status : state
           })
           if(res.ok){
               const response = await res.json();
               setArray(response);
               console.log(response);
               setLoading(false);
           }
        })()
    },[state])
    return (
        <div className="container h-100">
            <h1 >Workspace</h1>
            <Stack direction="row" style={{height : "90%"}} spacing={2}>
                <Paper className="menu"style = {{height : "fit-content"}}>
                    <MenuList>
                        {
                            tags?.map((tag,index) => (
                                <MenuItem selected ={index === state} onClick={() => handleSelectPage(tags.indexOf(tag))}>{tag}</MenuItem>
                            ))
                        }
                    </MenuList>
                </Paper>

                <Paper className="paper-info w-100 h-100 p-2 d-flex flex-column" style = {{overflowY: "scroll"}}>
                    {loading ? <ClipLoader size={200} color= {"#1aa94b"} className = "m-auto"/> : getActivePage()}
                </Paper>

            </Stack>
        </div>
    );
}
export default SupplierWorkspace
