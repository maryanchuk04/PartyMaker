import React, { useEffect } from "react";
import AvatarWrapper from "../../ui/AvatarWrapper";
const ExistingService = ({suppService}) => {
    useEffect(()=>{
        console.log(suppService);
    },[])
  return (
    <div class="row w-100 m-1">
      <div className="col-md-auto d-flex align-items-center flex-column my-2 text-center">
        <AvatarWrapper />
      </div>
      <div class="col mx-3">
        <Stack direction="column" className="m-2 w-100" spacing={2}>
          <DetailsField label={"Description service"} />
          <div className="d-flex justify-content-center h-50">
            <Button
              variant="contained"
              onClick={(supplierServices[index] = service)}
            >
              Save service
            </Button>
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default ExistingService;
