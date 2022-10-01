using PartyMaker.Domain.Entities;

namespace PartyMaker.Domain.Interfaces.Dao;

public interface ISuppliersDao
{
    List<Supplier> GetSupliers();
    Supplier GetById(Guid id);
    void Deactivate(Guid id);
}