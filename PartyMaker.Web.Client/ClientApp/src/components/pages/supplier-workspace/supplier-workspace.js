import React, { useState } from 'react'
import './supplier-workspace.css'
import DetailsDialog from "../../ui/supplier-workspace/DetailsDialog.js";
import { TextareaAutosize, TextField } from '@mui/material';
import SampleButton from '../../ui/SampleButton'

const Page=({ id })=> {

        const [response, setResponse] = useState({
            response: "",
            price: 0
        });

        function sendResponse(e) {
            e.preventDefault();
            console.log(response);
            // request to backend
        }

    switch (id) {
        case 0:
            return (
                <div>
                    <h4>Active</h4>
                    <p>Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName</p>
                    <DetailsDialog description = "Hello world"/>
                    <hr />
                    <p>Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName</p>
                    <DetailsDialog description="world hello" />
                    <hr />
                    <p>Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName</p>
                    <DetailsDialog description="helloworld" />
                    <hr />
                </div>);
        case 1:
            return (
                <div>
                    <h4>Requests</h4>
                    <p>Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName</p>
                    <DetailsDialog />

                    <form onSubmit={sendResponse}>
                        <TextareaAutosize placeholder="Response..." minRows={3} className="response-field" required onChange={(e) => setResponse({ ...response, response: e.target.value })} />
                        <div className="price-field">
                            <TextField size="small" label="Price" variant="outlined" required onChange={(e) => setResponse({ ...response, price: e.target.value })} />
                            <SampleButton type="submit" >Send</SampleButton>
                        </div>
                    </form>


                    <hr />
                    <p>Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName</p>
                    <DetailsDialog />
                    <TextareaAutosize placeholder="Response..." minRows={3} style={{ width: '100%' }} className="response-field" />
                    <div className="price-field">
                        <TextField size="small" label="Price" variant="outlined" />
                        <SampleButton type="submit" >Send</SampleButton>
                    </div>
                    <hr />

                    <p>Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName</p>
                    <DetailsDialog />
                    <TextareaAutosize placeholder="Response..." minRows={3} style={{ width: '100%' }} className="response-field" />
                    <div className="price-field">
                        <TextField size="small" label="Price" variant="outlined" />
                        <SampleButton type="submit" >Send</SampleButton>
                    </div>
                    <hr />
                </div>);
        case 2:
            return (
                <div>
                    <h4>Finished</h4>
                    <p>Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName</p>
                    <DetailsDialog />
                    <hr />
                    <p>Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName</p>
                    <DetailsDialog />
                    <hr />
                    <p>Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName</p>
                    <DetailsDialog />
                    <hr />
                    <p>Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName</p>
                    <DetailsDialog />
                    <hr />
                    <p>Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName</p>
                    <DetailsDialog />
                    <hr />
                    <p>Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName</p>
                    <DetailsDialog />
                    <hr />
                    <p>Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName</p>
                    <DetailsDialog />
                    <hr />
                    <p>Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName</p>
                    <DetailsDialog />
                    <hr />
                    <p>Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName</p>
                    <DetailsDialog />
                    <hr />
                </div>);
        default:
            return (<h1>No such menu option
            </h1>);

    }
}
export default Page
