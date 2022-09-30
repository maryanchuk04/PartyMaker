import React, { useState } from "react";
import { TextareaAutosize, TextField, Rating, Typography } from "@mui/material";
import SampleButton from "../../ui/SampleButton";
import { Paper } from "@material-ui/core";
import ServiceGridComponent from '../../ui/supplierProfile/ServiceGrid';
import { useParams } from 'react-router'

const SupplierProfile = () => {

    let profile={
        name: "Вацак",
        description: "The leader in the production of confectionery products in Vinnytsia region. The company occupies a reliable position on the Ukrainian market in the confectionery industry. The assortment of sweet products includes more than 150 types of cakes, pastries, muffins, rolls, marshmallows, cookies, candies.",
        picture: "https://scontent.fdnk2-1.fna.fbcdn.net/v/t1.6435-9/41688237_2157764287883062_1992984676406394880_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=P3ijmKwwyyYAX83ECBN&_nc_ht=scontent.fdnk2-1.fna&oh=00_AT8loPgkwTxmNfQwfTSUodZ5e1koQmRaRcpvmYa6jP22SA&oe=635A2918",
        services: [
            {
                id: 0,
                category: "Cake",
                description: "s in your mouth. And the final touch is an airy meringue decorated with almond petals.",
                image: "https://cdn.vatsak.com.ua/YablokoMigdal.png.webp",
            },
            {
                id: 1,
                category: "Cake",
                description: "It is a protein sponge with a layer of almond filling, a layer of apple marmalade with a slight sourness and a layer of the most delicate milk-vanilla soufflé that just melts in your mouth. And the final touch is an airy meringue decorated with almond petals.",
                image: "https://cdn.vatsak.com.ua/YablokoMigdal.png.webp",
            },
            {
                id: 2,
                category: "Cake",
                description: "It is a protein sponge with a layer of almond filling, a layer of It is a protein sponge with a layer of almond filling, a layer of It is a protein sponge with a layer of almond filling, a layer of It is a protein sponge with a layer of almond filling, a layer of It is a protein sponge with a layer of almond filling, a layer of It is a protein sponge with a layer of almond filling, a layer of apple marmalade with a slight sourness and a layer of the most delicate milk-vanilla soufflé that just melts in your mouth. And the final touch is an airy meringue decorated with almond petals.",
                image: "https://cdn.vatsak.com.ua/YablokoMigdal.png.webp",
            },
            {
                id: 3,
                category: "Cake",
                description: "It is a protein sponge with a layer of almond filling, a layer of apple marmalade with a slight sourness and a layer of the most delicate milk-vanilla soufflé that just melts in your mouth. And the final touch is an airy meringue decorated with almond petals.",
                image: "https://cdn.vatsak.com.ua/YablokoMigdal.png.webp",
            },
            {
                id: 4,
                category: "Cake",
                description: "It is a protein sponge with a layer of almond filling, a layer of apple marmalade with a slight sourness and a layer of the most delicate milk-vanilla soufflé that just melts in your mouth. And the final touch is an airy meringue decorated with almond petals.",
                image: "https://cdn.vatsak.com.ua/YablokoMigdal.png.webp",
            },
            {
                id: 5,
                category: "Cake",
                description: "It is a protein sponge with a layer of almond filling, a layer of apple marmalade with a slight sourness and a layer of the most delicate milk-vanilla soufflé that just melts in your mouth. And the final touch is an airy meringue decorated with almond petals.",
                image: "https://cdn.vatsak.com.ua/YablokoMigdal.png.webp",
            },
            {
                id: 6,
                category: "Cake",
                description: "It is a protein sponge with a layer of almond filling, a layer of apple marmalade with a slight sourness and a layer of the most delicate milk-vanilla soufflé that just melts in your mouth. And the final touch is an airy meringue decorated with almond petals.",
                image: "https://cdn.vatsak.com.ua/YablokoMigdal.png.webp",
            },
        ],
    };

    const id = useParams().id;

    const [review, setReview] = useState({
        email: '',
        rating: 4 ,
        comment:''
    });
    function sendReview(e) {
        e.preventDefault();
        console.log(review);
        // request to backend
    }

    return (
        <div className="container">
            <h1>Profile {id}</h1>
            <Paper >
                <div class="row" >
                    <div className="col text-center" >
                        <img src={profile.picture} class="profile-pic" />
                    </div>
                    <div className="col m-5">
                        <h2>{profile.name}</h2>
                        <Typography  variant="h5" >
                            {profile.description}
                        </Typography>
                    </div>
                </div>   
                <div className="m-auto d-flex flex-column text-center">
                    <h2>Company services</h2>
                   
                        <ServiceGridComponent services={profile.services} />
                       
                </div>

                <form className="d-flex flex-column box-shadow-design p-4 m-auto w-50" onSubmit={sendReview}>
                    <h3>Send feedback</h3>
                    <div class="row">
                        <div class="col">
                        <TextField
                        type="email"
                        variant="standard"
                        className="my-2"
                        label="Email"
                        required
                        onChange={(e) => setReview({ ...review, email: e.target.value })}
                            />
                        </div>
                        <div class="col">
                        <Rating
                            className="mt-4 mb-2"
                            size="large"
                            value={review.rating}
                            onChange={(e, newValue) => {
                                setReview({ ...review, rating: newValue })
                            }}
                            />
                            </div>
                    </div>
                    <TextareaAutosize required
                        placeholder="Leave review..."
                        minRows={2}
                        className="response-field mb-2 p-2 "
                        onChange={(e) => setReview({ ...review, comment: e.target.value })}
                    />
                <SampleButton type="submit" >Send</SampleButton>
                </form>
            </Paper>
        </div>

    );
}
export default SupplierProfile