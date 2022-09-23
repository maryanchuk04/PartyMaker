import React from "react";
import DetailsDialog from "./DetailsDialog";
const OtherOrderInfoField = ({ item }) => {
  return (
    <div>
      <p>{item.shortInfo}</p>
      <DetailsDialog description="Hello world" />
      <hr />
    </div>
  );
};

export default OtherOrderInfoField;
