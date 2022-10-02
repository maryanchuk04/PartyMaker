import {BaseService} from "./BaseService";

const _baseService = new BaseService();

export class ServicesService{
    getAllServices=()=>_baseService.getData('Services/GetAllServices');
}