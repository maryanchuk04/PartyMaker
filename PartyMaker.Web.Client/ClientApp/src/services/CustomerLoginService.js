import { BaseService } from "./BaseService";

const _baseService = new BaseService();

export class CustomerLoginService {
    loginCustomer = data => _baseService.setData("Account/Login", data);
    getUserData = () => _baseService.getData(`Account/GetUsersAuthData`);
}