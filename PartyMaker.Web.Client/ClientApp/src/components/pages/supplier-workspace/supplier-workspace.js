import React, { useState } from "react";
import "./supplier-workspace.css";
import RequestField from "../../ui/supplier-workspace/RequestField";
import OtherOrderInfoField from "../../ui/supplier-workspace/OtherOrderInfoField";

const Page = ({ id }) => {
  const array = [
    {
      shortInfo: "Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName",
    },
    {
      shortInfo: "Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName",
    },
    {
      shortInfo: "Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName",
    },
    {
      shortInfo: "Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName",
    },
    {
      shortInfo: "Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName",
    },
  ];
  switch (id) {
    case 0:
      return (
        <div>
          <h4>Active</h4>
          {array.map((item) => (
            <OtherOrderInfoField item={item}/>
          ))}
        </div>
      );
    case 1:
      return (
        <div className="w-100">
          <h4>Requests</h4>
          {array.map((item) => (
            <RequestField item={item} />
          ))}
        </div>
      );
    case 2:
      return (
        <div>
          <h4>Finished</h4>
          {array.map((item) => (
            <OtherOrderInfoField item={item} />
          ))}
        </div>
      );
    default:
      return <h1>No such menu option</h1>;
  }
};
export default Page;
