import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ComboBox from "../../../ui/ComboBox";
import DatePicker from "../../../ui/DatePicker";
import NumberField from "../../../ui/NumberField";
import DetailsField from "./DetailsField";
import MapControl from "./MapControl";
import SuppliersList from "./SuppliersList";
import { SupplierService } from "../../../../services/SupplierService";
const tempTopSuppliers = [
  {
    id: 1,
    image:
      "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
    companyName: "Google",
    supplierServices: ["Cakes", "Balls", "Hourse"],
  },
  {
    id: 2,
    image:
      "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
    companyName: "apple",
    supplierServices: ["Cakes", "Balls", "Hourse"],
  },
  {
    id: 3,
    image:
      "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
    companyName: "hello",
    supplierServices: [
      "Cakes",
      "Balls",
      "Hourse",
      "Cakes",
      "Balls",
      "Hourse",
      "Cakes",
      "Balls",
      "Hourse",
      "Cakes",
      "Balls",
      "Hourse",
      "Hourse",
      "Cakes",
      "Balls",
      "Hourse",
    ],
  },
  {
    id: 4,
    image:
      "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
    companyName: "Case",
    supplierServices: ["Cakes", "Balls", "Hourse"],
  },
  {
    id: 5,
    image:
      "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
    companyName: "Supplier1",
    supplierServices: ["Cakes", "Balls", "Hourse"],
  },
];

const Item = ({ submitItem, handleClear, index }) => {
  const supplierService = new SupplierService();
  const [supplierState, setSupplierState] = useState([]);
  const [itemState, setItemState] = useState({
    suppliers: [],
    service: null,
    address: {
      location: "",
      longitude: 0,
      latitude: 0,
    },
    details: "",
    date: "",
    qty: 0,
  });

  const handleSubmitItem = () => {
    console.log(itemState);
    submitItem(itemState);
  };

  useEffect(() => {
    //get services from db
  }, []);
  
  const handleChangeComboBox = async (itemId) => {
    const res = await supplierService.getSuppliersByServiceId(itemId);
    if (res.ok) {
      const responce = await res.json();
      console.log(responce);
      setItemState({
        ...itemState,
        suppliers: responce,
        service: itemId,
      });
      setSupplierState(responce);
    }
  };

  const handleChooseLocation = (location) =>
    setItemState({ ...itemState, address: location });
  const handleChooseDetails = (details) =>
    setItemState({ ...itemState, details: details });
  const handleQty = (number) => setItemState({ ...itemState, qty: number });
  const handleDate = (date) => setItemState({ ...itemState, date: date });
  const handleRequestSuppliers = (data) =>
    setItemState({ ...itemState, suppliers: data });

  return (
    <div>
      <div className="row w-100 m-auto">
        <div className="col col-md-auto">
          <ComboBox
            label={"Choose the service"}
            handleChange={handleChangeComboBox}
            arrayData={[{ id: 12, name: "ballons" }]}
          />
          <DatePicker
            handleChange={handleDate}
            value={itemState.date}
            required={true}
          />
        </div>
        <div className="col col-md-3" style={{ minWidth: "320px" }}>
          <NumberField
            label={"Count"}
            handleChange={handleQty}
            required={true}
          />
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
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Item;
