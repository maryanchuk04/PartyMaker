import React, { useEffect, useState } from "react";
import { Button, TextField, Rating, Typography, Avatar } from "@mui/material";
import SampleButton from "../../ui/SampleButton";
import { Paper } from "@material-ui/core";
import ServiceGridComponent from "../../ui/supplierProfile/ServiceGrid";
import { useParams } from "react-router";
import { SupplierService } from "../../../services/SupplierService";
import { ClipLoader } from "react-spinners";
import DetailsField from "../order/components/DetailsField";
import useMedia from "use-media";

const SupplierProfile = () => {
  const supplierService = new SupplierService();
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  const media = useMedia({maxWidth : 800})
  useEffect(() => {
    (async () => {
      const res = await supplierService.getSupplierById(id);
      if (res.ok) {
        const response = await res.json();
        setProfile(response);
        setLoading(false);
      }
    })();
  }, []);
  const [review, setReview] = useState({
    email: "",
    rating: 0,
    comment: "",
  });

  const sendFeedback = (e) =>{
    e.preventDefault();
  }

  return (
    <div className="container h-100 d-flex flex-column">
      <h1 className="text-center pt-4">Profile</h1>
      {loading ? <ClipLoader size={200} color= {"#1aa94b"} className = "m-auto"/> :<Paper elevation={3} className = 'mb-4'>
        <div class="row p-2 m-auto " style = {{width : "90%"}}>
          <div className="col-md-auto text-center d-flex">
            <Avatar src={profile.imageUrl}  sx={{height : "300px", width : "300px"}} className = 'm-auto'/>
          </div>
          <div className="col w-100 px-4 h-100 d-flex flex-column my-4" style ={{textAlign : "right"}}>
            <h2 className = "">{profile.companyName}</h2>
            <h3 className = "text-right">{profile.email} <i className = 'fas fa-at'></i></h3>
            {profile.city && <h5 className = "text-right">{profile.city} <i className = 'fas fa-city'></i></h5>}
            {profile.phone && <h5 className = "text-right">{profile.phone} <i className = 'fas fa-phone'></i></h5>}
            <Typography variant="h5" className = "text-right">{profile.description}</Typography>
          </div>
        </div>
        <div className="m-auto d-flex flex-column text-center">
          <h2>Company services</h2>
          <ServiceGridComponent services={profile.supplierServices} />
        </div>
        <form className={`d-flex flex-column box-shadow-design p-4 my-4 m-auto ${!media ? "w-50" : "w-75" } `} onSubmit={(e)=>sendFeedback(e)}>
          <h3>Send feedback</h3>
          <div class="row">
            <div class="col">
              <TextField
                type="email"
                variant="outlined"
                className="my-2 w-100"
                label="Email"
                required
                onChange={(e) =>
                  setReview({ ...review, email: e.target.value })
                }
              />
            </div>
            <div class="col d-flex justify-content-end">
              <Rating
                className="mt-4 mb-2"
                size="large"
                value={review.rating}
                onChange={(e, newValue) => {
                  setReview({ ...review, rating: newValue });
                }}
              />
            </div>
          </div>
          <DetailsField
            label = {"Message"}
            handleChooseDetails={(e) => setReview({ ...review, comment: e })}
          />
          <Button variant = 'contained' className = 'my-2' type="submit">Send</Button>
        </form>
      </Paper>}
    </div>
  );
};
export default SupplierProfile;
