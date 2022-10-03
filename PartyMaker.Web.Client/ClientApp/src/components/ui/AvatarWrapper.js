import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { uploadImage } from "../../utils/helpers";
import { Avatar, IconButton } from "@mui/material";
const AvatarWrapper = ({ avatarImage, setAvatar, uploadServiceHandle }) => {
  const [file, setFile] = useState({});
  const [image, setImage] = useState("");
  useEffect(() => {
    setImage(avatarImage);
  }, [avatarImage]);
  const uploadNewImage = async (e) => {
    setFile(e);
    const files = Object(e.currentTarget.files)[0];
    console.log(files);
    setFile(files);
    const res = await uploadImage(files);
    setAvatar(res);
    setImage(res);
    await uploadServiceHandle(res);
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => uploadNewImage(e)}
        
        accept="image/*"
        style={{ display: "none" }}
      />
      <label htmlFor="upload">
        <IconButton
          className="m-auto"
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <Avatar
            src={
              image ||
              "https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
            }
            sx={{ height: "300px", width: "300px" }}
          />
        </IconButton>
      </label>
      <label htmlFor="avatar" />
      <br />
      <Button variant="contained" component="label">
        Upload avatar
        <input
          hidden
          type="file"
          accept="image/*"
          onChange={(e) => uploadNewImage(e)}
        />
      </Button>
    </div>
  );
};

export default AvatarWrapper;
