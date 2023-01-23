import React from "react";
import Spinner from "./Spinner";

const SpinnerWrapper = ({ showContent, children }) => {
    return !showContent ? <Spinner /> : children;
};


export default SpinnerWrapper;
