import {BaseService} from "./BaseService";

const _baseService = new BaseService();

export class OrderService{
    createOrder = (data) => _baseService.setData("Order/Create", data);

    getOrderById = id => _baseService.getData(`Order/GetOrderById/${id}`);

    getCustomerByOrderId = id => _baseService.getData(`Order/GetCustomerByOrderId/${id}`);

    receiveItem = id => _baseService.getData(`Order/ReceivedItem/${id}`);

    deliveryItem = id => _baseService.getData(`Order/DeliveryItem/${id}`);
}