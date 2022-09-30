import React, { useState } from 'react'
import '../../pages/supplier-profile/supplier-profile.css'
import 'react-awesome-slider/dist/styles.css';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const ServiceGridComponent = ({ services }) => {

    const [counter, setCounter] = useState(1);
    function increment() {
        setCounter(counter + 1);
    }

    const rows = services.reduce(function (rows, key, index) {
        return (index % 3 == 0 ? rows.push([key])
            : rows[rows.length - 1].push(key)) && rows;
    }, []);

    console.log(rows);
    return <div>
        {rows.slice(0, counter).map(row => ( 

            <div className="row justify-content-evenly mx-5 my-2">
                {row.map(item => (
                    <div className="col" >
                        <Card sx={{ height: "100%", minWidth:"40vh" }}>
                            <CardMedia component="img" image={item.image} class="service-pic" />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    {item.category} {item.id}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" >
                                    {item.description}
                            </Typography>
                            </CardContent>
                        </Card>
                        </div>
                ))}
            </div>
        ))} 
        {counter < rows.length &&
            <Button
                onClick={increment}>
                Show more
            </Button>
        }
    </div>
}

export default ServiceGridComponent