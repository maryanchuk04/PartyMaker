import { BaseService } from "./BaseService";

const _baseService = new BaseService();

export class CustomerRegistrationService {
    addNewCustomer = data => _baseService.setData("Account/Register", data);
}