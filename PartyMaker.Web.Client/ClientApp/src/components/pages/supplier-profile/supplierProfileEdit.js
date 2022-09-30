import React, { useState } from "react";
import "./supplier-profile.css";
import { TextareaAutosize, TextField, Button} from "@mui/material";
import SampleButton from "../../ui/SampleButton";
import { Paper } from "@material-ui/core";
import ServiceEditor from "../../ui/supplierProfile/ServiceEditor";

const SupplierProfileEdit = () => {

    const [profile, setProfile] = useState({
        name: "",
        description: "",
        picture: undefined,
        services: [],
    });
    const [index, setIndex] = useState(0);

    function addNewCategory() {
        profile.services.push({ id: index, service: null });
        setIndex(index + 1);
    }
    function sendProfile(e) {
        e.preventDefault();
        console.log(profile);
        // request to backend
    }
    const avatarImage = profile.picture !== undefined ?
        URL.createObjectURL(profile.picture) :
        'https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg'

    return (
        <div className="container h-100">
            <h1 >Profile</h1>
            <Paper >
                <form onSubmit={sendProfile}>

                    <div className="row h-100" >
                        <div className="col text-center m-3 ">
                            {avatarImage && (
                                <img src={avatarImage} class="image-preview" />)}
                            <br />
                            <Button variant="contained" component="label">
                                Upload avatar
                                <input hidden
                                    type="file"
                                    accept='image/*'
                                    onChange={(e) => setProfile({ ...profile, picture: e.target.files[0] })}
                                />
                            </Button>
                        </div>
                        <div className="col m-3">
                            <TextField required
                                className="response-field"
                                label="Company Name"
                                variant="outlined"
                                onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
                            <TextareaAutosize required
                                placeholder="Company description"
                                minRows={2}
                                className="response-field w-75 my-2 p-2"
                                onChange={(e) => setProfile({ ...profile, description: e.target.value })}
                            />
                        </div>
                    </div>
                    {
                        profile.services.map((item) => (
                            <ServiceEditor index={item.id} profile={profile} />
                        ))
                    }
                    <Button onClick={addNewCategory} className="m-3">
                        + Add service</Button>
                    <div className="row justify-content-center">
                        <SampleButton type="submit" >Save changes</SampleButton>
                    </div>
                </form>
            </Paper>
        </div>

    );
}
export default SupplierProfileEdit