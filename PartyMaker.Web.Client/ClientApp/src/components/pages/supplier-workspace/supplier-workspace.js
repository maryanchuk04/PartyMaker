import React, { useState } from "react";
import "./supplier-workspace.css";
import RequestField from "../../ui/supplier-workspace/RequestField";
import OtherOrderInfoField from "../../ui/supplier-workspace/OtherOrderInfoField";

const Page = ({ id, array, setLoading }) => {
  return (
    <div className="w-100 px-3">
      {id == 0 ? (
        <>
          <h4>Requested</h4>
          {array.map((item) => (
            <RequestField item={item} setLoading = {setLoading}/>
          ))}
        </>
      ) : id == 3 ? (
        <>
          <h4>Active</h4>
          {array.map((item) => (
            <OtherOrderInfoField item={item} />
          ))}
        </>
      ) : (
        <>
          <h4>Finished</h4>
          {array.map((item) => (
            <RequestField item={item} />
          ))}
        </>
      )}
    </div>
  );
};
export default Page;
