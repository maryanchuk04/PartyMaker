import { TextField, Button } from "@mui/material";
import { SupplierService } from "../../../services/SupplierService";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SampleButton from "../../ui/SampleButton";
import "./supplier-login.css";
import { useHistory } from "react-router-dom";
import { BaseService } from "../../../services/BaseService";

const SupplierLogin = () => {
  const supplierService = new SupplierService();
  const baseService = new BaseService();
  const history = useHistory();

  const [supplierState, setSupplierState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    role: "supplier"
  });

  async function createSupplier(e) {
    e.preventDefault();
    console.log(supplierState);

    const res = await supplierService.insertNewSupplier(supplierState);
    if (res.ok) {
      alert("Supplier registered succesfully");
      history.push("/profile");
      window.location.reload();
    }
  }

  return (
    <div className="container h-100 d-flex flex-column">
      <form
        className="box-shadow-design m-auto d-flex flex-column p-5"
        onSubmit={createSupplier}
      >
        <h1>Welcome to PartyMaker!</h1>
        <h2>Register your company!</h2>

        <TextField
          label="Company name"
          variant="standard"
          className="field"
          required
          onChange={(e) =>
            setSupplierState({ ...supplierState, name: e.target.value })
          }
          sx={{ marginY: "10px" }}
        />
        <TextField
          label="Email"
          variant="standard"
          className="field"
          required
          onChange={(e) =>
            setSupplierState({ ...supplierState, email: e.target.value })
          }
          sx={{ marginY: "10px" }}
        />
        <TextField
          label="Password"
          variant="standard"
          className="field"
          required
          onChange={(e) =>
            setSupplierState({ ...supplierState, password: e.target.value })
          }
          sx={{ marginY: "10px" }}
        />
        <TextField
          label="Confirm password"
          variant="standard"
          className="field"
          required
          onChange={(e) =>
            setSupplierState({ ...supplierState, passwordConfirm: e.target.value })
          }
          sx={{ marginY: "10px" }}
        />
        <SampleButton type="submit">Sign up</SampleButton>
        <Link to="/" className="m-auto mt-3" underline="hover">
          {"Account is already exist"}
        </Link>
      </form>
      <div className="waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1aa94b"
            fill-opacity="1"
            d="M0,288L26.7,282.7C53.3,277,107,267,160,240C213.3,213,267,171,320,170.7C373.3,171,427,213,480,213.3C533.3,213,587,171,640,133.3C693.3,96,747,64,800,53.3C853.3,43,907,53,960,80C1013.3,107,1067,149,1120,149.3C1173.3,149,1227,107,1280,90.7C1333.3,75,1387,85,1413,90.7L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};
export default SupplierLogin;
