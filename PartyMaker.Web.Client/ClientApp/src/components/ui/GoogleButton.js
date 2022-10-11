import React from "react";
import "./button.css";
import { GoogleLogin } from "react-google-login";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { useState } from "react";
import { ExternalLogin } from "../../services/ExternalLogin";
import axios from "axios";
import { setAuthState } from "../../utils/helpers";
const GoogleButton = () => {
  const service = new ExternalLogin();

  useEffect(() => {
    // function start() {
    //   gapi.client.init({
    //     clientId:
    //       "361271152420-l9ggnenveihf9u1a9q91b2uj8qsgfec6.apps.googleusercontent.com",
    //     scope: "",
    //   });
    // }
    // gapi.load("client:auth2", start);
  }, []);

  // const handleLogin = async () =>{

  //   const res  = service.googleAuth();
  //   if(res.ok){
  //     console.log(res.status)
  //     const res_user = await service.getUserData();
  //     if(res_user.ok){
  //       const response = await res_user.json();
  //       setAuthState(response);
  //       window.location.reload();
  //     }
  //   }
  // }
  const handleLogin = (e)=>{
    console.log(e);
  }
   

  return (
    <form method ='POST' action = "https://localhost:7295/api/ExternalLogin/ExternalLogin" onSubmit = {(e)=>handleLogin(e)}>
      <button className="google-button" type='submit'>
        <div className="line">
          <img
            src="https://img.icons8.com/color/344/google-logo.png"
            alt=""
            id="googleIcon"
          />
          <p>Continue with google</p>
        </div>
      </button>
    </form>
  );
};

export default GoogleButton;
