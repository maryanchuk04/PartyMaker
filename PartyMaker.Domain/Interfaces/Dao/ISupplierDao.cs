using PartyMaker.Domain.Entities;

namespace PartyMaker.Domain.Interfaces.Dao;

public interface ISupplierDao
{
    Supplier GetById(Guid id);

    List<Supplier> GetByServiceId(Guid id);
}