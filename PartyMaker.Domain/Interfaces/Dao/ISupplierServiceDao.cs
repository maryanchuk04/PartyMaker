using PartyMaker.Domain.Entities;

namespace PartyMaker.Domain.Interfaces.Dao;

public interface ISupplierServiceDao
{
    void Create(string description, string imageUrl, Guid supplierId, Guid serviceId);

    void Update(string description, string imageUrl, Guid serviceId, Guid supplierServiceId);

    void Delete(Guid id);

    List<SupplierService> GetSupplierServices(Guid supplierId);

    SupplierService GetById(Guid id);

    SupplierService GetSupplierService(Guid serviceId, Guid supplierId);
}