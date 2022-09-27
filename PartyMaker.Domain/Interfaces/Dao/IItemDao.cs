using PartyMaker.Domain.Entities;

namespace PartyMaker.Domain.Interfaces.Dao;

public interface IItemDao
{
    //list of parr
    Task<Item> Create();

    Task<Item> Update();

    Task Delete(Guid id);
}