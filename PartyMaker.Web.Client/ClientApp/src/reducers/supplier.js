import { GET_SUPPLIER_DATA } from "../actions/supplier-action";
import initialState from "../store/initialState";

export const reducer = (state = initialState.supplier, action) =>{
    switch (action.type) {
        case GET_SUPPLIER_DATA:
            return{
                ...action.payload
            }
        default:
            return state;
    }
}