import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {OrderService} from '../../../../services/OrderService'
import TabsWrapper from '../../../ui/TabsWrapper';
import DetailsContent from './DetailsContent';
import { ClipLoader } from 'react-spinners';
const OrderDetailsPage = () => {
    const [value, setValue] = useState(0);
    const items = [0,1,2,3];
    const service = new OrderService();
    const [order,setOrder] = useState({});
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        async function getOrderInfo(){
            const res = await service.getOrderById(id);
            if(res.ok){
                const responce =await res.json();
                console.log(responce);
                setOrder(responce);
                setLoading(false)
            } 
        }
        (async()=>{
            await getOrderInfo();
        })()
    },[])

  return (
    <div className = "container h-100 d-flex flex-column">
        {loading ? <ClipLoader size={200} color= {"#1aa94b"} className = "m-auto"/> : 
        <div className = "h-100">
            <h1 className = 'text-center' style = {{height : "5%"}}>Order</h1>
            <TabsWrapper items = {order?.items} value = {value} setValue = {setValue}/>
            <div style = {{height : "90%"}}>
                <DetailsContent element = {order?.items[value]}/>
            </div>
        </div>
        }
    </div>
  )
}

export default OrderDetailsPage