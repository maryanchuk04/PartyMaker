using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Interfaces.Dao;

namespace PartyMaker.MsSqlDatabase.Dao;

public class ItemRequestDao : IItemRequestDao
{
    public async Task<ItemRequest> Create()
    {
        throw new NotImplementedException();
    }

    public async Task<ItemRequest> Update()
    {
        throw new NotImplementedException();
    }

    public async Task Delete(Guid id)
    {
        throw new NotImplementedException();
    }
}