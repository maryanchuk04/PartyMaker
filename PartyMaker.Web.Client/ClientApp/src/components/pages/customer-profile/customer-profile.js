import React, { useState, useEffect } from 'react';
import { Tab, TextField } from "@mui/material";
import Tabs from "../../ui/customer-profile-ui/Tabs";
import ContentTable from "../../ui/customer-profile-ui/ContentTable";
import { Avatar, IconButton } from "@material-ui/core";


const CustomerProfile = () => {


    const [images, setImages] = useState('');
    const [imageURLs, setImageURLs] = useState('');

    useEffect(() => {
        if (images.length < 1) return;
        const newImagesURLs = [];
        images.forEach(image => newImagesURLs.push(URL.createObjectURL(image)));
        setImageURLs(newImagesURLs);
    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files]);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4 d-flex justify-content-center align-items-center my-5">
                    <input type="file" onChange={onImageChange} id="upload" accept="image/*" style={{ display: "none" }} />
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
                <div class="mt-3 col-sm-8 card">
                    <TextField className="my-3" id="standard-basic" label="UserName" variant="standard" />
                    <TextField className="my-3" id="standard-basic" label="FirstName" variant="standard" />
                    <TextField className="my-3" id="standard-basic" label="LastName" variant="standard" />
                    <TextField className="my-3" id="standard-basic" label="Age" variant="standard" />
                </div>




            </div>
            <Tabs />
        </div>
    )
}





export default CustomerProfile;