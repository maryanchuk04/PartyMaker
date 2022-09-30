using PartyMaker.Domain.Entities;

namespace PartyMaker.Domain.Interfaces.Services;

public interface ISuppliersService
{
    List<Supplier> GetSuppliers();
    Supplier GetById(Guid id);
    List<SupplierService> GetSupplierServices(Guid supplierId);
}