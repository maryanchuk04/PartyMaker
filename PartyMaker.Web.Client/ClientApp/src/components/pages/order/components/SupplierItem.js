import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import RatingWrapper from "../../../ui/RatingWrapper";
import { Checkbox } from "@mui/material";
const SupplierItem = ({
  supplier,
  selectAll,
  handleChecked,
  listSuppliers,
}) => {
  const [checkbox, setCheckBox] = useState(selectAll);
  useEffect(() => {
    setCheckBox(selectAll);
    console.log(selectAll);
  }, [selectAll]);

  const handleChange = (value) => {
    setCheckBox(value);
    if (value === true) {
      handleChecked([...listSuppliers, supplier]);
      return;
    } else {
      let item = listSuppliers.find((x) => x.id === supplier.id);
      if (item == null) return;
      else handleChecked(listSuppliers.filter((x) => x.id !== supplier.id));
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center py-3">
      <Avatar src={supplier.image} sx={{ width: 50, height: 50 }} />
      <div className="w-50 d-flex flex-column">
        <h4>{supplier.companyName}</h4>
        <RatingWrapper value={4} isReadOnly={true} />
      </div>
      <Checkbox
        defaultChecked
        onChange={(e) => handleChange(e.target.checked)}
        checked={checkbox}
      />
    </div>
  );
};

export default SupplierItem;
