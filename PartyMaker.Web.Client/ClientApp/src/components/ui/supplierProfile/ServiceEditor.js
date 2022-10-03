import React, { useEffect, useState } from "react";
import "../../pages/supplier-profile/supplier-profile.css";
import { Button, InputLabel, Stack } from "@mui/material";
import ComboBox from "../ComboBox";
import { ServicesService } from "../../../services/ServicesService";
import DetailsField from "../../pages/order/components/DetailsField";
import AvatarWrapper from "../AvatarWrapper";
import AccordionItem from "../../pages/order/components/AccordionItem";
const ServiceEditor = ({
  index,
  supplierService,
  editService,
  createService,
  supplier,
  setAllServices
}) => {
  const serviceServices = new ServicesService();
  const [services, setServices] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await serviceServices.getAllServices();
      if (res.ok) {
        const response = await res.json();
        const arrayIds =supplier?.supplierServices.map((x)=>x.service.id);
        let arr = response.reduce((prev, current) => {
            if(!arrayIds?.includes(current?.id) || supplierService?.service.id===current.id){
                prev.push(current)
            }
            return prev;
        }, [])
        setAllServices(response)
        setServices(arr);
      }
    })();
  }, []);

  const [service, setService] = useState({
    serviceId: "",
    description: "",
    image: undefined,
  });

  const [existingService,setExistingService] = useState({
      id : supplierService?.id || "",
      serviceId : supplierService?.service.id || "",
      description : supplierService?.description || "",
      image : supplierService?.imageUrl || undefined
  });

  return (
    <div className="mx-3">
      <AccordionItem
        title={
          supplierService?.service
            ? supplierService?.service?.name
            : `New service ${index + 1}`
        }
      >
        <div class="row w-100 m-1">
          <div className="col-md-auto d-flex align-items-center flex-column my-2 text-center">
            <AvatarWrapper
              avatarImage={supplierService?.imageUrl}
              uploadServiceHandle = {()=>{}}
              setAvatar={(url) => { supplierService?.service ? setExistingService({...existingService, image : url}) : setService({ ...service, image: url })}}
            />
          </div>
          <div class="col mx-3">
            <Stack direction="column" className="m-2 w-100" spacing={2}>
              <ComboBox
                arrayData={services}
                label={"Services"}
                defaultValue={supplierService?.service?.id || null}
                handleChange={(id) =>supplierService?.service? setExistingService({...existingService, serviceId: id}) : setService({ ...service, serviceId: id })}
              />
              <DetailsField
                label={"Description service"}
                defaultValue={supplierService?.description || ""}
                handleChooseDetails ={(value)=> supplierService?.service? setExistingService({...existingService, description : value}) : setService({...service, description : value})}
              />
              <div className="d-flex justify-content-center h-50">
                <Button
                  variant="contained"
                  onClick={() =>
                    supplierService?.service
                      ? editService(existingService.id, {
                          serviceId : existingService.serviceId,
                          description : existingService.description,
                          image : existingService.image
                      })
                      : createService(service)
                  }
                >
                  {supplierService?.service ? "Save service" : "Create service"}
                </Button>
              </div>
            </Stack>
          </div>
        </div>
      </AccordionItem>
    </div>
  );
};
export default ServiceEditor;
