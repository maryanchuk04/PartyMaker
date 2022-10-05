import { TextField } from "@mui/material";
import Divider from "@mui/material/Divider";
import React, { useState } from "react";
import GoogleButton from "../../ui/GoogleButton";
import SampleButton from "../../ui/SampleButton";
import { useHistory } from "react-router-dom";
import { BaseService } from "../../../services/BaseService";
import { CustomerLoginService } from "../../../services/CustomerLoginService";
import "./sign-in.css";
import AlertWrapper from "../../ui/Alert";
import { setAuthState } from "../../../utils/helpers";

const SignInPage = () => {
  const loginService = new CustomerLoginService();
  const baseService = new BaseService();
  const history = useHistory();
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  async function signIn(e) {
    e.preventDefault();
    const res = await loginService.loginCustomer(login);
    if (res.ok) {
      const response = await res.json();
      setAuthState(response);
      setAlert({ show: true, message: "Success!", type: "success" });
      setTimeout(() => {
        setAlert({ ...alert, show: false });
        if(response.supplierId === ""){
          window.location ="/customer/profile";
        }
        if(response.customerId === ""){
          window.location ="/supplier/profile-edit";
        }
      }, 3000);
    } else {
      if (res.status === 400) {
        const response = await res.json();
        setAlert({ show: true, message: response.error, type: "error" });
        setTimeout(() => {
          setAlert({ ...alert, show: false });
        },3000);
      } else {
        setAlert({
          show: true,
          message: "Something was wrong!",
          type: "error",
        });
        setTimeout(() => {
          setAlert({ ...alert, show: false });
        }, 3000);
      }
    }
  }

  return (
    <div className="container d-flex h-100">
      <form
        className="d-flex flex-column box-shadow-design p-4 m-auto"
        onSubmit={signIn}
      >
        <div className="sign-in-content text-center">
          <div className="text">
            <h1>Welcome back to PartyMaker</h1>
            <h3>Log in to your existing account</h3>
          </div>
        </div>
        <TextField
          variant="standard"
          className="my-2"
          label="Email"
          required
          type = 'Email'
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
        />
        <TextField
          variant="standard"
          className="my-2"
          label="Password"
          required
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
          type="password"
          sx={{ marginBottom: "30px !important" }}
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
      {alert.show && (
        <AlertWrapper
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ ...alert, show: false })}
        />
      )}
    </div>
  );
};

export default SignInPage;
