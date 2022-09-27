using PartyMaker.Domain.Entities;

namespace PartyMaker.Domain.Interfaces.Dao;

public interface IItemRequestDao
{
    Task<ItemRequest> Create();

    Task<ItemRequest> Update();

    Task Delete(Guid id);
}