import React, { useState } from "react";
import DetailsDialog from "./DetailsDialog";
import { TextareaAutosize, TextField, Button } from "@mui/material";

const RequestField = ({item}) => {
  const [response, setResponse] = useState({
    response: "",
    price: 0,
  });

  function sendResponse(e) {
    e.preventDefault();
    console.log(response);
    // request to backend
  }
  return (
    <div>
      <p>{item.shortInfo}</p>
      <DetailsDialog />
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
            label="Price"
            variant="outlined"
            required
            onChange={(e) =>
              setResponse({ ...response, price: e.target.value })
            }
          />
          <Button type="submit" variant = 'contained' sx ={{marginLeft : "10px"}}>Send</Button>
        </div>
      </form>

      <hr />
    </div>
  );
};

export default RequestField;
