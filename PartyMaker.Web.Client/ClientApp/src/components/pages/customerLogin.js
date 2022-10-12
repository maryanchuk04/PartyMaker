import TextField from "@mui/material/TextField";
import { Container, Form, Card } from "react-bootstrap";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SampleButton from "../ui/SampleButton";
import { Link } from "react-router-dom";
import { BaseService } from "../../services/BaseService";
import { CustomerRegistrationService } from "../../services/CustomerRegistrationService";
import { setAuthState } from "../../utils/helpers";
import AlertWrapper from '../ui/Alert'

const CustomerLogin = () => {
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const registrationService = new CustomerRegistrationService();
  const history = useHistory();

  const [customerData, setCustomerData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
    role: "customer",
  });

  async function createCustomer(e) {
    e.preventDefault();
    const res = await registrationService.addNewCustomer(customerData);
    if (res.ok) {
      const response = await res.json();
      setAuthState(response);
      setAlert({ show: true, message: "Success!", type: "success" });
      setTimeout(() => {
        setAlert({ ...alert, show: false });
        window.location ="/customer/profile";
      }, 5000);
    }else{
        if(res.status === 400){
            const response2 = await res.json();
            setAlert({ show: true, message: response2.errors.PasswordConfirm[0], type: "error" });
            setTimeout(() => {
                setAlert({ ...alert, show: false });
            }, 5000);
        }else{
            setAlert({ show: true, message: "Something was wrong!", type: "error" });
            setTimeout(() => {
                setAlert({ ...alert, show: false });
            }, 5000);
        }
    }
  }

  return (
    <div className="container d-flex flex-column  h-100 ">
      <form
        onSubmit={createCustomer}
        className="d-flex flex-column box-shadow-design m-auto p-5"
      >
        <h2 className="text-center">Welcome to PartyMaker</h2>
        <h4 className="text-center">Register your new customer account</h4>
        <TextField
          className="mt-3"
          required
          label="Email"
          type = 'email'
          variant="standard"
          onChange={(e) =>
            setCustomerData({ ...customerData, email: e.target.value })
          }
        />
        <TextField
          className="mt-3"
          required
          label="First Name"
          variant="standard"
          onChange={(e) =>
            setCustomerData({ ...customerData, firstName: e.target.value })
          }
        />
        <TextField
          className="mt-3"
          required
          label="Last Name"
          variant="standard"
          onChange={(e) =>
            setCustomerData({ ...customerData, lastName: e.target.value })
          }
        />
        <TextField
          className="mt-3"
          required
          type="password"
          label="Password"
          variant="standard"
          onChange={(e) =>
            setCustomerData({ ...customerData, password: e.target.value })
          }
        />
        <TextField
          className="my-3"
          required
          type="password"
          label="ConfirmPassword"
          variant="standard"
          onChange={(e) =>
            setCustomerData({
              ...customerData,
              passwordConfirm: e.target.value,
            })
          }
        />
        <SampleButton type={"submit"}>Sign up</SampleButton>
        <Link to="/auth/login" className="m-auto mt-3" underline="hover">
          {"Account is already exist"}
        </Link>
      </form>
      <div className="waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1aa94b"
            fill-opacity="1"
            d="M0,0L26.7,26.7C53.3,53,107,107,160,112C213.3,117,267,75,320,69.3C373.3,64,427,96,480,96C533.3,96,587,64,640,74.7C693.3,85,747,139,800,170.7C853.3,203,907,213,960,218.7C1013.3,224,1067,224,1120,208C1173.3,192,1227,160,1280,165.3C1333.3,171,1387,213,1413,234.7L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
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

export default CustomerLogin;
