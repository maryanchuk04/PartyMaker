import React, { useState } from "react";
import '../../pages/supplier-profile/supplier-profile.css'
import { TextareaAutosize, Stack, InputLabel, MenuItem, Select, FormControl, Box } from "@mui/material";
import InputImage from "../../ui/supplierProfile/InputImage";
import SampleButton from "../../ui/SampleButton";


const ServiceEditor = (props) => {

    const { index, profile } = props;

    const [service, setService] = useState({
        id: index,
        category: "",
        description: "",
        image: undefined,
    });
    return (
        <div class="row w-100">
            <div className="col-sm-4 d-flex align-items-center flex-column my-2">
                <img src={service.image} class="image-preview" />
                <InputImage onChange={(e) => setService({ ...service, image: URL.createObjectURL(e.target.files[0]) })}>
                    Upload example
                </InputImage>
            </div>
            <div class="col-sm-8">
                <Stack direction="column" className="m-2 w-100" spacing={2} >
                    <Box sx={{ width: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="category-select-label">Category</InputLabel>
                            <Select
                                required
                                labelId="category-select-label"
                                value={service.category}
                                label="Category"
                                onChange={(e) =>
                                    setService({ ...service, category: e.target.value })}>
                                <MenuItem value={"cake"}>Cake</MenuItem>
                                <MenuItem value={"ballons"}>Ballons</MenuItem>
                                <MenuItem value={"place"}>Place</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <TextareaAutosize
                        placeholder="Service description"
                        minRows={2}
                        className="response-field w-100 mb-2 p-2 "
                        required
                        onChange={(e) =>
                            setService({ ...service, description: e.target.value })}
                    />
                    <div className="d-flex justify-content-center h-50">
                        <SampleButton onClick={profile.services[index] = service}>
                            Save service
                        </SampleButton>
                    </div>
                </Stack>
            </div>

        </div>

    );
};
export default ServiceEditor;
