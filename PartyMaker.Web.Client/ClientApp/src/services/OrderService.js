import {BaseService} from "./BaseService";

const _baseService = new BaseService();

export class OrderService{
    createOrder = (data) => _baseService.setData("Order/Create", data);
}