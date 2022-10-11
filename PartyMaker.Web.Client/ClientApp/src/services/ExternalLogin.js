import {BaseService} from "./BaseService";

const _baseService = new BaseService();

export class ExternalLogin{
    googleAuth = () => _baseService.getData(`ExternalLogin/ExternalLogin`)

   
}