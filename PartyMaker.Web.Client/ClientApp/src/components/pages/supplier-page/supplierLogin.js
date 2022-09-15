import { TextField, Button } from '@mui/material';
import { SupplierService } from '../../../services/SupplierService'
import React, { useState } from 'react'

import './supplier-login.css'

const SupplierLogin = () => {
    const supplierService = new SupplierService();

    const [supplierState, setSupplierState] = useState({
        name: "",
        email: "",
        password: "",
        confirm: ""
    })


    async function createSupplier(e) {
        e.preventDefault();
        console.log(supplierState);
        const res = await supplierService.insertNewSupplier(supplierState);
        console.log(res)
        if (res.ok) {
            alert("Supplier registered succesfully")
            window.location.reload();
        }

    }


    return (
        <div >
            <form className="create-supplier-form" onSubmit={createSupplier}>
                <h1>Welcome to PartyMaker!</h1>
                <h2>Register your company!</h2>

                <TextField label="Company name" variant="standard" className="field" required onChange={(e) => setSupplierState({ ...supplierState, name: e.target.value })} />
                <TextField label="Email" variant="standard" className="field" required onChange={(e) => setSupplierState({ ...supplierState, email: e.target.value })} />
                <TextField label="Password" variant="standard" className="field" required onChange={(e) => setSupplierState({ ...supplierState, password: e.target.value })} />
                <TextField label="Confirm password" variant="standard" className="field" required onChange={(e) => setSupplierState({ ...supplierState, confirm: e.target.value })} />
                <Button className="field" variant="contained" color="success" type="submit">Sign up</Button>
                <a href="#" >Account already exists </a>

            </form>

        </div>
    );
}
export default SupplierLogin
