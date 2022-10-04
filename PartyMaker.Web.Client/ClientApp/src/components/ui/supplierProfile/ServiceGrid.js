import React, { useState, useEffect } from 'react'
import '../../pages/supplier-profile/supplier-profile.css'
import 'react-awesome-slider/dist/styles.css';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const ServiceGridComponent = ({ services }) => {
    useEffect(()=>{
    },[])
    const [counter, setCounter] = useState(1);
    function increment() {
        setCounter(counter + 1);
    }

    const rows = services.reduce(function (rows, key, index) {
        return (index % 3 == 0 ? rows.push([key])
            : rows[rows.length - 1].push(key)) && rows;
    }, []);
    return <div>
        {rows.slice(0, counter).map(row => ( 
            <div className="row justify-content-evenly mx-5 my-2">
                {row.map(item => (
                    <div className="col my-2" >
                        <Card sx={{ height: "100%"}}>
                            <CardMedia component="img" image={item.imageUrl} sx = {{maxHeight : "200px", minHeight : "200px", paddingTop: "10px"}} class="service-pic" />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    {item.service.name}
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