using PartyMaker.Domain.Entities;

namespace PartyMaker.Domain.Interfaces.Dao;

public interface IItemDao
{
    void Update(Item item);

    void Delete(Guid id);
}