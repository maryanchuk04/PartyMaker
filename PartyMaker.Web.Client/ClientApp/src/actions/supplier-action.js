import { SupplierService } from "../services/SupplierService";


const service = new SupplierService();

export const GET_SUPPLIER_DATA = "GET_SUPPLIER_DATA";

export function getSupplierById(id){
    return async dispatch =>{
        const response = await service.getSupplierById(id);
        if(!response.ok){
            alert("ERROR");
            return Promise.reject();
        }
        let jsonRes = await response.json();
        dispatch(getSupplier(jsonRes));
        return Promise.resolve();
    }
}


function getSupplier(data){
    return{
        type : GET_SUPPLIER_DATA,
        payload : data
    }
}
