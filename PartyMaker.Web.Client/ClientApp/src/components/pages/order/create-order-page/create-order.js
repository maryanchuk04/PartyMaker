import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import AccordionItem from "../components/AccordionItem";
import Item from "../components/Item";
import { useMedia } from "use-media";
import { OrderService } from "../../../../services/OrderService";
import { ArrowForwardIosOutlined } from "@material-ui/icons";
import AlertWrapper from "../../../ui/Alert";
import { getAuthState } from "../../../../utils/helpers";

const CreateOrder = () => {
  const [accordionState, setAccordionState] = useState([]);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [orderState, setOrderState] = useState([]);
  const media = useMedia({ maxWidth: 430 });
  const service = new OrderService();

  const handleAdd = (new_element) => {
    console.log(new_element);
    setAccordionState((prev) => [...prev, new_element]);
  };

  const handleSubmitItem = (item) => {
    setOrderState((prev) => [...prev, item]);
  };

  const handleCancel = () => setAccordionState([]);

  const handleRemoveItem = (index) =>
    setAccordionState(accordionState.filter((x) => x !== index));
  const handleShowMessage = (message) =>{
    setAlert({ show: true, message: message, type: "success" });
    setTimeout(() => setAlert({ ...alert, show: false }), 5000);
  }
  async function createOrder() {
    const res = await service.createOrder({
      customerId: getAuthState().customerId,
      items: orderState,
    });
    if (res.ok) {
      //maybe redirect details page
      setAlert({ show: true, message: "Order Created!", type: "success" });
      setTimeout(() => setAlert({ ...alert, show: false }), 5000);
      handleCancel();
    } else {
      setAlert({ show: true, message: "Something went wrong", type: "error" });
      setTimeout(() => setAlert({ ...alert, show: false }), 5000);
    }
  }

  return (
    <div className="container pb-4">
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
          <Button
            variant="contained"
            sx={{ marginLeft: "20px" }}
            onClick={createOrder}
          >
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
              handleShowMessage = {handleShowMessage}
            />
          </AccordionItem>
        ))
      )}
      {alert.show && (
        <AlertWrapper
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ ...alert, show: false })}
        />
      )}
    </div>
  );
};

export default CreateOrder;
