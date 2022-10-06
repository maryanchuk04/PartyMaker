import React, { useState } from "react";
import DetailsDialog from "./DetailsDialog";
import { TextareaAutosize, TextField, Button } from "@mui/material";
import SimpleModal from "../SimpleModal";
import DetailsWrapper from "./DetailsWrapper";
import { getAuthState } from "../../../utils/helpers";
const RequestField = ({ item }) => {
  const [open,setOpen] = useState(false);
  const [response, setResponse] = useState({
    response: "",
    price: 0,
    itemId : "",
    supplierId : getAuthState().supplierId
  });

  function sendResponse(e) {
    e.preventDefault();
    // request to backend
  }
  return (
    <div>
      <p>{item.shortInfo}</p>
      {open  && <SimpleModal open = {open} close ={()=>setOpen(false)} title = {"Details"} oneButton = {true} handleSubmit = {()=>setOpen(false)}>
            <DetailsWrapper item = {item}/>
      </SimpleModal>}
      <Button variant = 'outlined' onClick = {()=>setOpen(true)}>Details</Button>
      <form onSubmit={sendResponse}>
        <TextareaAutosize
          placeholder="Response..."
          minRows={3}
          className="response-field w-100 my-1"
          required
          onChange={(e) =>
            setResponse({ ...response, response: e.target.value })
          }
        />
        <div className="price-field d-flex w-100 justify-content-end my-1">
          <TextField
            size="small"
            label="Price $"
            variant="outlined"
            required
            type = 'number'
            onChange={(e) =>
              setResponse({ ...response, price: e.target.value })
            }
          />
          <Button type="submit" variant="contained" sx={{ marginLeft: "10px" }}>
            Send
          </Button>
        </div>
      </form>

      <hr />
    </div>
  );
};

export default RequestField;
