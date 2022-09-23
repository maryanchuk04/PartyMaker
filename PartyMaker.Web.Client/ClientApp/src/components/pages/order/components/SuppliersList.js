import React, { useEffect, useState } from "react";
import SupplierItem from "./SupplierItem";
import { Divider, IconButton } from "@mui/material";
import SearchField from "../../ui/SearchField";

const SuppliersList = ({
  suppliers,
  handleChangeSuppliersList,
  choosenSuppliers,
}) => {
  const [suppliersFiltred, setSuppliersFiltred] = useState([]);
  const [checkedAllState, setCheckedAllState] = useState(true);

  const handleSearch = (text) => {
    const res = suppliers.filter((el) => {
      if (text === "") {
        return el;
      } else {
        return el.companyName.toLowerCase().includes(text);
      }
    });
    setSuppliersFiltred(res);
  };

  const checkedAll = () => {
    if (!checkedAllState === true) {
      handleChangeSuppliersList(suppliersFiltred);
    } else handleChangeSuppliersList([]);
    setCheckedAllState(!checkedAllState);
  };

  useEffect(() => {
    setSuppliersFiltred(suppliers);
  }, [suppliers]);

  return (
    <div className="box-shadow-design p-3 h-100">
      <div className="row">
        <div className="col">
          <h4>Suppliers</h4>
        </div>
        <div className="col d-flex justify-content-end">
          <IconButton color="primary" onClick={checkedAll}>
            <i className="fas fa-check-double"></i>
          </IconButton>
        </div>
      </div>

      {suppliers?.length === 0 ? (
        <div className="d-flex" style={{ height: "300px" }}>
          <p className="text-center m-auto">Choose the services</p>
        </div>
      ) : (
        <>
          <SearchField handleSearch={handleSearch} />
          <div
            className="d-flex flex-column"
            style={{ height: "300px", overflowY: "scroll" }}
          >
            {suppliersFiltred?.map((elem, index) => (
              <div>
                <SupplierItem
                  supplier={elem}
                  selectAll={checkedAllState}
                  handleChecked={handleChangeSuppliersList}
                  listSuppliers={choosenSuppliers}
                />
                <Divider />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SuppliersList;
