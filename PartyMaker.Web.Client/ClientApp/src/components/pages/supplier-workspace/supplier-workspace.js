import React, { useState } from "react";
import "./supplier-workspace.css";
import RequestField from "../../ui/supplier-workspace/RequestField";
import OtherOrderInfoField from "../../ui/supplier-workspace/OtherOrderInfoField";
import AnsweredField from "../../ui/supplier-workspace/AnsweredField";
import Finished from "../../ui/supplier-workspace/Finished";

const Page = ({ id, array, setLoading }) => {
  return (
    <div className="w-100 px-3">
     {(() => {
        switch (id) {
          case 0:
            return <>
            <h4>Requested</h4>
            {array.map((item) => (
              <RequestField item={item} setLoading = {setLoading}/>
            ))}
          </>
          case 3:
            return <>
            <h4>Active</h4>
            {array.map((item) => (
              <OtherOrderInfoField item={item} />
            ))}
          </>
          case 7:
            return <>
            <h4>Finished</h4>
            {array.map((item) => (
              <Finished item={item} />
            ))}
          </>
          case 1:
            return <>
            <h4>Answered</h4>
            {array.map((item) => (
              <AnsweredField item={item} />
            ))}
          </>
          default:
            return null
        }
      })()}
    </div>
  );
};
export default Page;
