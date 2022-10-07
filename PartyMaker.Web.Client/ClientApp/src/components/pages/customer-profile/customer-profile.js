import React, { useState, useEffect } from 'react';
import { Tab, TextField } from "@mui/material";
import Tabs from "../../ui/customer-profile-ui/Tabs";
import ContentTable from "../../ui/customer-profile-ui/ContentTable";
import { Avatar, IconButton } from "@material-ui/core";
import { CustomerLoginService } from "../../../services/CustomerProfileService";
import { Button } from "@mui/material";
import { UserService } from "../../../services/UserService";
import { Paper } from "@material-ui/core";
import AvatarWrapper from "../../ui/AvatarWrapper";
import { ClipLoader } from "react-spinners";
import { getAuthState, isAuth } from "../../../utils/helpers";
import { useHistory } from "react-router";

const CustomerProfile = () => {
    const [loading, setLoading] = useState(true);
    const service = new CustomerLoginService();
    const userService = new UserService();
    const [customer, setCustomer] = useState({});

    const [customerInfo, setCustomerInfo] = useState({
        email: "",
        userName: "",
        age: "",
        firstName: "",
        lastName: "",
    });

    const history = useHistory();

    useEffect(() => {
        if (!isAuth()) {
            history.push("/auth/login");
        }
        (async () => {
            const res = await service.getCustomerById(
                getAuthState().customerId
            );
            if (res.ok) {
                const response = await res.json();
                setCustomer(response);
                console.log(response)
                setCustomerInfo({
                    email: response.email || "",
                    userName: response.userName || "",
                    age: response.age || "",
                });
                setLoading(false);
            }
        })();
    }, []);

    const saveInfo = async () => {
        const res = await service.changeCustomerInfo(
            getAuthState().customerId,
            customerInfo
        );
    };


    const uploadImage = async (imageUrl) => {
        const res = await userService.changeAvatar(
            getAuthState().userId,
            { url: imageUrl }
        );
    }

    const setAvatar = (image) =>
        setCustomer({ ...customer, image: image });
    useEffect(() => { }, [customer]);


    return (
        <div className="container h-100 d-flex flex-column">
            {loading ? (
                <ClipLoader size={200} color={"#1aa94b"} className="m-auto" />
            ) : (
                <>
                    <h1 className="text-center pt-4">Customer Profile</h1>
                    <Paper className="mb-4 py-3" sx={{ minHeight: "100%" }}>
                        <form>
                            <div className="row h-100">
                                <div className="col-md-auto text-center">
                                    <AvatarWrapper
                                        avatarImage={customer?.image}
                                        setAvatar={setAvatar}
                                        uploadServiceHandle={uploadImage}
                                    />
                                </div>

                                <div className="col m-3">
                                    <div className="d-flex">
                                        <TextField
                                            className="response-field w-100 mb-3"
                                            label="Email"
                                            defaultValue={customerInfo.email}
                                            variant="outlined"
                                            onChange={(e) =>
                                                setCustomerInfo({
                                                    ...customerInfo,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                        <TextField
                                            className="response-field w-100 mb-3"
                                            label="UserName"
                                            defaultValue={customerInfo.userName}
                                            variant="outlined"
                                            onChange={(e) =>
                                                setCustomerInfo({
                                                    ...customerInfo,
                                                    userName: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <TextField
                                        className="response-field w-100 mb-3"
                                        label="Age"
                                        defaultValue={customerInfo.age}
                                        variant="outlined"
                                        onChange={(e) =>
                                            setCustomerInfo({
                                                ...customerInfo,
                                                age: e.target.value,
                                            })
                                        }
                                    />
                                    <div className="d-flex">
                                        <TextField
                                            className="response-field w-100 mb-3"
                                            label="FirstName"
                                            defaultValue={customerInfo.firstName}
                                            variant="outlined"
                                            onChange={(e) =>
                                                setCustomerInfo({
                                                    ...customerInfo,
                                                    firstName: e.target.value,
                                                })
                                            }
                                        />
                                        <TextField
                                            className="response-field w-100 mb-3"
                                            label="LastName"
                                            defaultValue={customerInfo.lastName}
                                            variant="outlined"
                                            onChange={(e) =>
                                                setCustomerInfo({
                                                    ...customerInfo,
                                                    lastName: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                
                            </div>
                            <div className="text-center m-2">
                                <Button
                                    variant="contained"
                                    className={"w-25 "}
                                    onClick={saveInfo}
                                >
                                    Save info
                                </Button>
                            </div>
                            
                        </form>
                        
                    </Paper>

                    <Tabs />

                </>
            )}
        </div>
    )
}





export default CustomerProfile;