import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@mui/material";
import AccordionItem from "../components/AccordionItem";
import Item from "../components/Item";
import { useMedia } from "use-media";
import { OrderService } from "../../../../services/OrderService";
import AlertWrapper from "../../../ui/Alert";
import { getAuthState, isAuth } from "../../../../utils/helpers";
import {useHistory} from 'react-router-dom'
const CreateOrder = () => {
  const [accordionState, setAccordionState] = useState([]);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [orderState, setOrderState] = useState([]);
  const media = useMedia({ maxWidth: 430 });
  const service = new OrderService();
  const history = useHistory();
  const handleAdd = (new_element) => {
    setAccordionState((prev) => [...prev, new_element]);
  };
  useEffect(()=>{
    if(!isAuth()){
      history.push("/")
    }
  },[]);
  

  const handleSubmitItem = (item, infoStr, index) => {
    const accordion = accordionState.map((elem, elemIndex)=>{
      if(elemIndex == index){
        return infoStr;
      }
      return elem;
    });
    setAccordionState(accordion);
    setOrderState((prev) => [...prev, item]);
  };

  const handleCancel = () => setAccordionState([]);

  const handleRemoveItem = (index) =>
    setAccordionState(accordionState.filter((x, Xindex) => Xindex !== index));

  const handleShowMessage = (message) =>{
    setAlert({ show: true, message: message, type: "success" });
    setTimeout(() => {
      setAlert({ ...alert, show: false })
    }, 3000);
  }
  async function createOrder() {
    const res = await service.createOrder({
      customerId: getAuthState().customerId,
      items: orderState,
    });
    if (res.ok) {
      const response = await res.json();
      setAlert({ show: true, message: "Order Created!", type: "success" });
      setTimeout(() =>{
         setAlert({ ...alert, show: false });
         history.push(`/order/${response.orderId}`)
      }, 3000);
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
            onClick={() => handleAdd(`Service ${accordionState.length+1}`)}
          >
            Add service
          </Button>
        ) : (
          <IconButton
            color="primary"
            onClick={() => handleAdd(`Service ${accordionState.length+1}`)}
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
          <AccordionItem title={elem}>
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
