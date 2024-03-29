﻿import React, { useEffect, useState } from "react";
import "./supplier-profile.css";
import { AlertTitle, TextField, Button, Alert } from "@mui/material";
import { Paper } from "@material-ui/core";
import ServiceEditor from "../../ui/supplierProfile/ServiceEditor";
import { SupplierService } from "../../../services/SupplierService";
import DetailsField from "../order/components/DetailsField";
import AvatarWrapper from "../../ui/AvatarWrapper";
import { UserService } from "../../../services/UserService";
import AlertWrapper from "../../ui/Alert";
import { ClipLoader } from "react-spinners";
import { getAuthState, isAuth } from "../../../utils/helpers";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const SupplierProfileEdit = () => {
  const [loading, setLoading] = useState(true);
  const service = new SupplierService();
  const userService = new UserService();
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [supplier, setSupplier] = useState({});
  const [newServices, setNewServices] = useState([]);
  const [mainInfo, setMainInfo] = useState({
    city: "",
    phone: "",
    description: "",
    companyName: "",
  });
  const history = useHistory();

  useEffect(() => {
    if (!isAuth()) {
      history.push("/auth/login");
    }
    (async () => {
      const res = await service.getSupplierById(getAuthState().supplierId);
      if (res.ok) {
        const response = await res.json();
        setSupplier(response);
        setMainInfo({
          city: response.city || "",
          phone: response.phone || "",
          description: response.description || "",
          companyName: response.companyName || "",
        });
        setLoading(false);
      }
    })();
  }, []);

  const [index, setIndex] = useState(0);

  function addNewCategory(newElement) {
    setNewServices((prev) => [...prev, newElement]);
    setIndex(index + 1);
  }

  const uploadServiceHandle = async (imageUrl) => {
    const res = await userService.changeAvatar(getAuthState().userId, {
      url: imageUrl,
    });
    if (res.ok) {
      setAlert({ show: true, message: "Avatar Changed!", type: "success" });
      setTimeout(() => setAlert({ ...alert, show: false }), 5000);
    } else {
      setAlert({ show: true, message: "Somethind was wrong!", type: "error" });
      setTimeout(() => setAlert({ ...alert, show: false }), 5000);
    }
  };

  const saveMainInfo = async () => {
    const res = await service.changeSupplierMainInfo(
      getAuthState().supplierId,
      mainInfo
    );
    if (res.ok) {
      setAlert({ show: true, message: "Main info changed!", type: "success" });
      setTimeout(() => setAlert({ ...alert, show: false }), 5000);
    } else {
      setAlert({ show: true, message: "Somethind was wrong!", type: "error" });
      setTimeout(() => setAlert({ ...alert, show: false }), 5000);
    }
  };

  const editService = async (supplierId, supplierServiceId, data) => {
    //edit
    const res = await service.editSupplierServiceInfo(
      supplierId,
      supplierServiceId,
      data
    );
    if (res.ok) {
      setAlert({ show: true, message: "Service changed!", type: "success" });
      setTimeout(() => setAlert({ ...alert, show: false }), 5000);
    } else {
      setAlert({ show: true, message: "Somethind was wrong!", type: "error" });
      setTimeout(() => setAlert({ ...alert, show: false }), 5000);
    }
  };

  const createService = async (data) => {
    const res = await service.addNewServiceForSupplier(
      getAuthState().supplierId,
      data
    );
    if (res.ok) {
      setAlert({ show: true, message: "Add new service!", type: "success" });
      setTimeout(() => setAlert({ ...alert, show: false }), 5000);
    } else {
      setAlert({ show: true, message: "Somethind was wrong!", type: "error" });
      setTimeout(() => {
        setAlert({ ...alert, show: false });
      }, 5000);
    }
  };

  const setAvatar = (image) => setSupplier({ ...supplier, image: image });
  useEffect(() => {}, [supplier]);

  return (
    <div className="container h-100 d-flex flex-column">
      {loading ? (
        <ClipLoader size={200} color={"#1aa94b"} className="m-auto" />
      ) : (
        <>
          <h1 className="text-center pt-4">Profile</h1>
          {supplier.isDeleted && (
            <Alert severity='error' className = 'w-100 my-2' style ={{backgroundColor: "rgb(253, 237, 237)"}}>
               <strong> You account was disabled!    </strong><Link to = '/сontact'>Please write in support...</Link>
            </Alert>
          )}
          <Paper className="mb-4 py-3" sx={{ minHeight: "100%" }}>
            <form>
              <div className="row h-100">
                <div className="col-md-auto text-center">
                  <AvatarWrapper
                    avatarImage={supplier?.imageUrl}
                    setAvatar={setAvatar}
                    uploadServiceHandle={uploadServiceHandle}
                  />
                </div>
                <div className="col m-3">
                  <div className="d-flex">
                    <TextField
                      className="response-field"
                      label="Company Name"
                      defaultValue={mainInfo.companyName}
                      variant="outlined"
                      className="w-100 mb-3"
                      onChange={(e) =>
                        setMainInfo({
                          ...mainInfo,
                          companyName: e.target.value,
                        })
                      }
                    />
                    <TextField
                      className="response-field"
                      label="Phone Number"
                      defaultValue={mainInfo.phone || ""}
                      variant="outlined"
                      className="w-100 mb-3"
                      onChange={(e) =>
                        setMainInfo({
                          ...mainInfo,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                  <TextField
                    className="response-field"
                    label="City"
                    defaultValue={mainInfo.city}
                    variant="outlined"
                    className="w-100 mb-3"
                    onChange={(e) =>
                      setMainInfo({
                        ...mainInfo,
                        city: e.target.value,
                      })
                    }
                  />
                  <DetailsField
                    label="Company description"
                    defaultValue={mainInfo.description}
                    handleChooseDetails={(value) =>
                      setMainInfo({ ...mainInfo, description: value })
                    }
                  />
                </div>
              </div>
              <div className="text-center m-2">
                <Button
                  variant="contained"
                  className={"w-25 "}
                  onClick={saveMainInfo}
                >
                  Save main info
                </Button>
              </div>

              <div className="container">
                {supplier.supplierServices.length !== 0 && (
                  <div>
                    <h3 className="text-center">Existing Services</h3>
                    {supplier.supplierServices.map((item, index) => (
                      <ServiceEditor
                        index={index}
                        supplierService={item}
                        editService={editService}
                        supplier={supplier}
                      />
                    ))}
                  </div>
                )}
                {newServices?.map((item, index) => (
                  <ServiceEditor
                    index={index}
                    supplierServices={supplier.supplierServices}
                    createService={createService}
                    supplier={supplier}
                  />
                ))}
                <Button
                  onClick={addNewCategory}
                  variant="outlined"
                  className="m-3"
                >
                  + Add service
                </Button>
              </div>
            </form>
          </Paper>
        </>
      )}
      {alert.show && <AlertWrapper message={alert.message} type={alert.type} />}
    </div>
  );
};
export default SupplierProfileEdit;
