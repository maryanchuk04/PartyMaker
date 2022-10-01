import {BaseService} from "./BaseService";

const _baseService = new BaseService();

export class SupplierService {
    getSuppliersByServiceId = id => _baseService.getData(`Supplier/GetSuppliersByServiceId/${id}`);

    insertNewSupplier = data => _baseService.setData("Account/Register", data);
}