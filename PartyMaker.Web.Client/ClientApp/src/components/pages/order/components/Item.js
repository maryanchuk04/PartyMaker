import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ComboBox from "../../../ui/ComboBox";
import DatePicker from "../../../ui/DatePicker";
import NumberField from "../../../ui/NumberField";
import DetailsField from "./DetailsField";
import MapControl from "./MapControl";
import SuppliersList from "./SuppliersList";
import { SupplierService } from "../../../../services/SupplierService";
import { ServicesService } from "../../../../services/ServicesService";
import { generateItemShortInfo } from "../../../../utils/helpers";

const Item = ({ submitItem, handleClear, index, handleShowMessage }) => {
  const [serviceString, setServiceString] = useState("")
  const supplierService = new SupplierService();
  const servicesService = new ServicesService();
  const [services, setServices] = useState([]);
  const [supplierState, setSupplierState] = useState([]);
  const [itemState, setItemState] = useState({
    suppliers: [],
    service: "",
    address: {
      location: "",
      longitude: 0,
      latitude: 0,
    },
    description: "",
    dateExecution: Date.now().toLocaleString(),
    qty: 0,
    price : 0
  });

  const handleSubmitItem = () => {
    
    const finalObj = {
      address : itemState.address,
      description : itemState.description,
      dateExecution : itemState.dateExecution,
      qty : itemState.qty,
      itemRequests : [],
      price : itemState.price
    }
    itemState?.suppliers.forEach(element => {
        finalObj.itemRequests.push({
          supplierId : element.id,
          serviceId : itemState.service
        })
    });
    
    const resStr = generateItemShortInfo({
      service : serviceString,
      date : finalObj.dateExecution,
      qty : finalObj.qty,
      price : finalObj.price
    });
    submitItem(finalObj, resStr,index);
    handleShowMessage("Service add.");
  };

  useEffect(() => {
    (async ()=> {
      const res = await servicesService.getAllServices();
      if(res.ok){
        const response = await res.json();
        setServices(response);
      }
    })()
  }, []);
  
  const handleChangeComboBox = async (itemId, value) => {
    setServiceString(value.name);
    const res = await supplierService.getSuppliersByServiceId(itemId);
    if (res.ok) {
      const responce = await res.json();
      setItemState({
        ...itemState,
        suppliers: responce,
        service : itemId
      });
      setSupplierState(responce);
    }
  };
  const handleChooseComboItem=(id) => setItemState({...itemState, service : id})
  const handleChooseLocation = (location) =>
    setItemState({ ...itemState, address: location });
  const handleChooseDetails = (details) =>
    setItemState({ ...itemState, description: details });
  const handleQty = (number) => setItemState({ ...itemState, qty: number });
  const handleDate = (date) => setItemState({ ...itemState, dateExecution: date });
  const handleRequestSuppliers = (data) =>
    setItemState({ ...itemState, suppliers: data });
  const handleChangePrice = (price) => setItemState({...itemState, price : price});

  return (
    <div>
      <div className="row w-100 m-auto">
        <div className="col col-md-auto">
          <ComboBox
            label={"Choose the service"}
            handleChange={handleChangeComboBox}
            arrayData={services}
          />
          <DatePicker
            handleChange={handleDate}
            value={itemState.dateExecution}
            required={true}
          />
        </div>
        <div className="col col-md-3" style={{ minWidth: "320px" }}>
          <div className = "row">
            <div className = 'col w-50'>
              <NumberField
                label={"Count"}
                handleChange={handleQty}
                required={true}
              />
            </div>
            <div className = 'col w-50'>
              <NumberField
                label={"Yor price for one"}
                handleChange={handleChangePrice}
                required={true}
              />
          </div>
          </div>
          <DetailsField
            label={"Service details"}
            handleChooseDetails={handleChooseDetails}
          />
          <MapControl handleChooseLocation={handleChooseLocation} />
        </div>
        <div className="col" style={{ minWidth: "320px" }}>
          <SuppliersList
            suppliers={supplierState}
            choosenSuppliers={itemState.suppliers}
            handleChangeSuppliersList={handleRequestSuppliers}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between m-2">
        <Button
          variant="outlined"
          color="error"
          onClick={() => handleClear(index)}
        >
          Clear
        </Button>
        <Button variant="outlined" type="button" onClick={handleSubmitItem}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default Item;
