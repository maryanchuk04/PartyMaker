using PartyMaker.Domain.Entities;

namespace PartyMaker.Domain.Interfaces.Dao;

public interface ISuppliersDao
{
    List<Supplier> GetSupliers();
    Supplier GetById(Guid id);
    Supplier GetSuppliersInfoById(Guid id);
    List<Supplier> GetByServiceId(Guid id);
}