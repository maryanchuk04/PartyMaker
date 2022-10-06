import React, { useState } from "react";
import "./supplier-workspace.css";
import RequestField from "../../ui/supplier-workspace/RequestField";
import OtherOrderInfoField from "../../ui/supplier-workspace/OtherOrderInfoField";

const Page = ({ id, array }) => {
  // const array = [
  //   {
  //     shortInfo: "Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName",
  //   },
  //   {
  //     shortInfo: "Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName",
  //   },
  //   {
  //     shortInfo: "Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName",
  //   },
  //   {
  //     shortInfo: "Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName",
  //   },
  //   {
  //     shortInfo: "Balls 50, 20:30 09/09/22, Supplier: PartyMaker_SupplierName",
  //   },
  // ];

  return (
    <div className ='w-100 px-5'>
      <h4>Requested</h4>
      {array.map((item) => (
        <RequestField item={item} />
      ))}
    </div>
  );
};
export default Page;
