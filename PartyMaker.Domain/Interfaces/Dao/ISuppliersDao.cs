using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Enumerations;

namespace PartyMaker.Domain.Interfaces.Dao;

public interface ISuppliersDao
{
    List<Supplier> GetSupliers();
    Supplier GetById(Guid id);
    Supplier GetSuppliersInfoById(Guid id);
    List<Supplier> GetByServiceId(Guid id);
    void Deactivate(Guid id);
    void Activate(Guid id);
    void ChangeMainInfo(Guid supplierId, string companyName, string phone, string city, string description);
    Guid GetSupplierIdByUserId(Guid userId);
    List<Item> GetSupplierItems(Guid supplier, RequestStatus status);
    List<Supplier> GetTopSuppliers();
}