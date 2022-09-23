import React from "react";
import "./button.css";
import { GoogleLogin } from "react-google-login";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { useState } from "react";

const GoogleButton = () => {
  const [googleResponse, setGoogleResponse] = useState({});

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "361271152420-l9ggnenveihf9u1a9q91b2uj8qsgfec6.apps.googleusercontent.com",
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const handleCallbackResponse = (response) => {
    console.log("Login Success", response);
    //if you want only google profile data u can write response.profileObj
    setGoogleResponse(response);
    console.log(googleResponse);
  };
  return (
    <GoogleLogin
      clientId="361271152420-l9ggnenveihf9u1a9q91b2uj8qsgfec6.apps.googleusercontent.com"
      onSuccess={handleCallbackResponse}
      onFailure={(res) => {
        console.log("Failed", res);
      }}
      isSignedIn={true}
      cookiePolicy={"single_host_origin"}
      render={(renderProps) => (
        <button className="google-button" onClick={renderProps.onClick}>
          <div className="line">
            <img
              src="https://img.icons8.com/color/344/google-logo.png"
              alt=""
              id="googleIcon"
            />
            <p>Continue with google</p>
          </div>
        </button>
      )}
    />
  );
};

export default GoogleButton;
