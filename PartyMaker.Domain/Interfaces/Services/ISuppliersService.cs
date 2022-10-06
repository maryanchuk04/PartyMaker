using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Enumerations;
using PartyMaker.Domain.Models;

namespace PartyMaker.Domain.Interfaces.Services;

public interface ISuppliersService
{
    List<Supplier> GetSuppliers();
    Supplier GetById(Guid id);
    List<SupplierService> GetSupplierServices(Guid supplierId);
    SupplierDto GetSuppliersInfoById(Guid id);
    List<SupplierDto> GetByServiceId(Guid id);
    void CreateSupplierService(Guid supplierId, Guid serviceId, string description, string imageUrl);
    void ChangeSupplierMainInfo(Guid supplierId, string companyName, string phone, string city, string description);
    void Deactivate(Guid id);
    void Activate(Guid id);
    void ChangeSupplierServiceInfo(Guid supplierServiceId, Guid serviceId, string description,
        string imageUrl);
    Guid GetSupplierIdByUserId(Guid userId);
    List<ItemDto> GetSupplierItems(Guid supplier, RequestStatus status);
}