import React, { useState, useEffect } from "react";
import "./supplier-profile.css";
import { TextareaAutosize, TextField, Button } from "@mui/material";
import SampleButton from "../../ui/SampleButton";
import ServiceEditor from "../../ui/supplierProfile/ServiceEditor";
import { Paper, Avatar, IconButton } from "@material-ui/core";

const SupplierProfileEdit = () => {

    const [profile, setProfile] = useState({
        name: "",
        description: "",
        picture: "",
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
    const [imageURLs, setImageURLs] = useState('');

    useEffect(() => {
        if (profile.picture.length < 1) return;
        const newImagesURLs = [];
        profile.picture.forEach(image => newImagesURLs.push(URL.createObjectURL(image)));
        setImageURLs(newImagesURLs);
    }, [profile.picture]);

    function onImageChange(e) {
        setProfile({ ...profile, picture: [...e.target.files] })
    }
    return (
        <div className="container h-100">
            <Paper >
                <form onSubmit={sendProfile}>
                    <div className="row h-100" >

                        <div className="col d-flex justify-content-center  my-5">
                            <input type="file"
                                onChange={onImageChange}
                                id="upload" accept="image/*" hidden />
                            <label htmlFor="upload">
                                <IconButton className="m-auto" color="primary" aria-label="upload picture" component="span">
                                    <Avatar id="avatar" src={imageURLs}
                                        style={{
                                            width: "300px",
                                            height: "300px",
                                        }}
                                    />
                                </IconButton>
                            </label>
                            <label htmlFor="avatar" />

                        </div>
                        <div className="col m-5 card h-50 " style={{ minWidth: "200px" }}>
                            <TextField required
                                className="response-field mt-4"
                                label="Company Name"
                                variant="outlined"
                                onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
                            <TextareaAutosize required
                                placeholder="Company description"
                                minRows={2}
                                className="response-field my-4 p-2"
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