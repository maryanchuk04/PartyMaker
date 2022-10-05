import React from "react";
import { useHistory } from "react-router";
import SampleButton from "../../ui/SampleButton";
import "./notfound.css";
const NotFound = () => {
    const history = useHistory();
  return (
    <div className = 'not-found-page '>
    <div className="container h-100 d-flex m-auto">
      <div className="not-found">
        <h1 className="display-1">
          Something went <br />
          <span className="font-weight-bold">wrong!</span>
        </h1>
        <SampleButton onClick = {()=>{history.push("/")}}><h3 className = 'p-2 m-0'>Go home</h3></SampleButton>
      </div>
      <div className="w-100 h-100 d-flex">
        <img
          src="https://i.ibb.co/YhXBLbh/undraw-Page-not-found-re-e9o6.png"
          alt=""
          className="w-100 m-auto"
        />
      </div>
    </div>
    </div>
  );
};

export default NotFound;
