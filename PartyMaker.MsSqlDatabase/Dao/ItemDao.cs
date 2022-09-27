using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Interfaces.Dao;

namespace PartyMaker.MsSqlDatabase.Dao;

public class ItemDao : IItemDao
{
    public async Task<Item> Create()
    {
        throw new NotImplementedException();
    }

    public async Task<Item> Update()
    {
        throw new NotImplementedException();
    }

    public async Task Delete(Guid id)
    {
        throw new NotImplementedException();
    }
}