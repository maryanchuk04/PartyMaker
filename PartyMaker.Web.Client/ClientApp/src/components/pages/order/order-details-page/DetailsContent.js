import React from "react";
import Map from "../../../ui/map";
import { useEffect, useState } from "react";
import DetailsField from "../components/DetailsField";
import AccordionItem from "../components/AccordionItem";
import Requested from "./Requested";
import AnsweredRequest from "./AnsweredRequest";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {useMedia} from "use-media"
import DatePicker from "../../../ui/DatePicker";
const DetailsContent = ({ element }) => {
  const [object, setObject] = useState({});
  const [address, setAddress] = useState(null);
  const [requested, setRequested] = useState([]);
  const [answered, setAnswered] = useState([]);
  const media = useMedia({maxWidth : 500});
  useEffect(() => {
    setObject(element);
    setAddress(element.addressDto);
    setRequested(element?.itemRequestDtos.filter(x=>x.requestStatus === 0));
    setAnswered(element?.itemRequestDtos.filter(x=>x.requestStatus === 1));
  }, [element]);

  useEffect(()=>{
  },[address])

  

  return (
    <div className="h-100 w-100 py-2">
      <div className="row my-1" style={{ height: !media ? "40%" : "fit-content" }}>
        <div className="col w-50" style = {{minWidth : "200px"}}>
          <div className = 'd-flex flex-column justify-content-between h-100'>
            <DetailsField label={"Details"} defaultValue={object.description} disabled ={true}/>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                // handleChange={handleDate}
                value={object.dateExecution}
                required={true}
                disabled = {true}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="col w-50 my-2" style = {{minWidth : "300px", minHeight : "200px"}}>
          {address && (
            <Map
              disable={true}
              handleSelect={() => {}}
              initCenter={{ lng: address?.longitude, lat: address?.latitude }}
            />
          )}
        </div>
      </div>
      <div className = 'w-100 my-2'>
        <AccordionItem title = {`Answer  (${answered?.length})`}>
          {answered?.map((item, key)=>(
            <AnsweredRequest item = {item} Item ={object}/>
          ))}
        </AccordionItem>
        <AccordionItem title = {`Requested (${requested?.length})`}>
          <div style={{maxHeight : "500px", overflowY : "scroll"}}>
          {requested?.map((item, key)=>(
            <Requested item = {item} Item ={object}/>
          ))}
          </div>
        </AccordionItem>
      </div>
    </div>
  );
};

export default DetailsContent;
