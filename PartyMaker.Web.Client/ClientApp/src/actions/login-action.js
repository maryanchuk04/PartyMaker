import { AuthService } from "../services/CustomerLoginService";
import { setAuthState } from "../utils/helpers";
import { createBrowserHistory } from 'history';
import { setErrorAllertFromResponse } from "./alert-action";

export const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
export const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
export const SET_USER = 'SET_USER';

const service = new AuthService();
const history = createBrowserHistory({ forceRefresh: true });

export const LOGIN = "LOGIN";

export default function login(data) {
  return async (dispatch) => {
    const response = await service.loginCustomer(data);
    if (!response.ok) {
      let err = await response.json();
      dispatch(setErrorAllertFromResponse(err.error));
      return Promise.reject();
    }

    let jsonRes = await response.json();
    console.log(jsonRes);
    setAuthState(jsonRes);
    if (jsonRes.supplierId === "") {
      history.push("/customer/profile");
    }
    if (jsonRes.customerId === "") {
      history.push("/supplier/profile-edit");
    }
  };
}


// export async function logOut(){
//     const authService = new CustomerLoginService();
//     localStorage.clear();
//     const res = await authService.logout();
//     if(res.ok){
//       window.location = '/';
//     }
   
//   }
