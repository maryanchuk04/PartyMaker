import { BaseService } from "./BaseService";

const _baseService = new BaseService();

export class UserService{
    changeAvatar = (id, data) => _baseService.setData(`User/ChangeAvatar/${id}`, data);

}