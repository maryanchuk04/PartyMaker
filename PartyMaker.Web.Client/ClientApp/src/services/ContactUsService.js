import {BaseService} from "./BaseService";

const _baseService = new BaseService();

export class ContactUsService{
    sendMessage = (data) => _baseService.setData("ContactUs/SendMessage", data);
}