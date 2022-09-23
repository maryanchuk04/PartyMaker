import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import AccordionItem from "../components/AccordionItem";
import Item from "../components/Item";
import useMedia from "use-media";

const CreateOrder = () => {
  const [accordionState, setAccordionState] = useState([]);
  const [orderState, setOrderState] = useState([]);
  const media = useMedia({ maxWidth: 430 });

  const handleAdd = (new_element) => {
    console.log(new_element);
    setAccordionState((prev) => [...prev, new_element]);
  };

  const handleSubmitItem = (item) => setOrderState((prev) => [...prev, item]);

  const handleCancel = () => setAccordionState([]);

  const handleRemoveItem = (index) =>
    setAccordionState(accordionState.filter((x) => x !== index));

  function createOrder() {
    //create Order
    console.log(orderState);
  }

  return (
    <div className="container pb-">
      <h1 className="text-center my-2">Create new order</h1>
      <div className="d-flex justify-content-between align-items-center my-4">
        {!media ? (
          <Button
            endIcon={<i className="fas fa-plus"></i>}
            variant="contained"
            onClick={() => handleAdd(accordionState.length)}
          >
            Add service
          </Button>
        ) : (
          <IconButton
            color="primary"
            onClick={() => handleAdd(accordionState.length)}
          >
            <i className="fas fa-plus"></i>
          </IconButton>
        )}
        <div className="d-flex justify-content-end">
          <Button onClick={handleCancel}>Cancel</Button>
          <Button variant="contained" sx={{ marginLeft: "20px" }}>
            Create order
          </Button>
        </div>
      </div>
      {accordionState.length === 0 ? (
        <div className="text-center">
          <p className="display-5 fst-italic">
            Add first service to your new order
          </p>
        </div>
      ) : (
        accordionState?.map((elem, index) => (
          <AccordionItem title={`Service ${index + 1}`}>
            <Item
              submitItem={handleSubmitItem}
              handleClear={handleRemoveItem}
              index={index}
            />
          </AccordionItem>
        ))
      )}
    </div>
  );
};

export default CreateOrder;
