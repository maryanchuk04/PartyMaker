import {BaseService} from "./BaseService";

const _baseService = new BaseService();

export class CustomerService{
    approveRequest = (id)=> _baseService.getData(`Customer/ApproveRequest/${id}`);

    cancelResult = (id) => _baseService.getData(`Customer/CancelRequest/${id}`);
}