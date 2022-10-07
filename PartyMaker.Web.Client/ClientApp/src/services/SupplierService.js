import {BaseService} from "./BaseService";

const _baseService = new BaseService();

export class SupplierService {
    getSuppliersByServiceId = id => _baseService.getData(`Supplier/GetSuppliersByServiceId/${id}`);

    insertNewSupplier = data => _baseService.setData("Account/Register", data);

    getSupplierById = (id) => _baseService.getData(`Supplier/GetSupplierById/${id}`);

    changeSupplierMainInfo = (id, data) => _baseService.setData(`Supplier/ChangeSupplierMainInfo/${id}`, data);

    addNewServiceForSupplier = (id, data) => _baseService.setData(`Supplier/AddSupplierService/${id}`, data);

    editSupplierServiceInfo = (supplierServiceId, data) => 
        _baseService.setData(`Supplier/EditSupplierServiceInfo/${supplierServiceId}`, data);

    getSuppliersItems = (id, data) => _baseService.setData(`Supplier/GetSuppliersItems/${id}`,data);

    sendResponse = (id,data) => _baseService.setData(`Supplier/SendResponse/${id}`,data);
}