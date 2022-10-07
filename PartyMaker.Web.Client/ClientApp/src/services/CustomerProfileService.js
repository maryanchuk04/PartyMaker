import { BaseService } from "./BaseService";

const _baseService = new BaseService();

export class CustomerLoginService {
    getCustomerById = id => _baseService.getData(`CustomerProfile/GetCustomerById/${id}`);
    getFilteredOrders = (id, state) => _baseService.getData(`CustomerProfile/GetFilteredOrders/${id}/${state}`)
    changeCustomerInfo = (id, data) => _baseService.setData(`CustomerProfile/ChangeCustomerProfileInfo/${id}`, data);
}