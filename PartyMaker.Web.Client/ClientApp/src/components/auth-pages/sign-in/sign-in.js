import { TextField } from "@mui/material";
import Divider from "@mui/material/Divider";
import React, { useState } from "react";
import GoogleButton from "../../ui/GoogleButton";
import SampleButton from "../../ui/SampleButton";
import login from "../../../actions/login-action";
import "./sign-in.css";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import renderTextField from "../../ui/renderTextField";

const SignInPage = (props) => {
  const { pristine, reset, submitting, error, handleSubmit } = props;

  return (
    <div className="container d-flex h-100">
      <form
        className="d-flex flex-column box-shadow-design p-4 m-auto"
        onSubmit={handleSubmit}
        autoComplete = 'off'
      >
        <div className="sign-in-content text-center">
          <div className="text">
            <h1>Welcome back to PartyMaker</h1>
            <h3>Log in to your existing account</h3>
          </div>
        </div>
        <Field 
          name = "email"
          type = 'email' 
          label="Email:"
          component={renderTextField}
          sx={{ marginBottom: "30px !important" }}
        />
        <Field  
          name = {"password"}
          type = 'password'
          label="Password:"
          component={renderTextField}
        />
        <SampleButton type="submit">Sign In</SampleButton>
        <div className="or">
          <Divider>or</Divider>
        </div>
        <GoogleButton />
      </form>
      <div className="waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1aa94b"
            fill-opacity="1"
            d="M0,224L26.7,213.3C53.3,203,107,181,160,170.7C213.3,160,267,160,320,181.3C373.3,203,427,245,480,234.7C533.3,224,587,160,640,128C693.3,96,747,96,800,106.7C853.3,117,907,139,960,128C1013.3,117,1067,75,1120,53.3C1173.3,32,1227,32,1280,53.3C1333.3,75,1387,117,1413,138.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};


export default reduxForm({
  form : "login-form",
})(SignInPage);
