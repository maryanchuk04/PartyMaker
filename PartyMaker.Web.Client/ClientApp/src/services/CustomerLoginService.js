import { BaseService } from "./BaseService";

const _baseService = new BaseService();

export class AuthService {
    loginCustomer = data => _baseService.setData("Account/Login", data);
    getUserData = () => _baseService.getData(`Account/GetUsersAuthData`);
    logout = () => _baseService.getData(`Account/Logout`);
}