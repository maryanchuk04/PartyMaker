using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Interfaces.Dao;
using PartyMaker.Domain.Interfaces.Services;
using PartyMaker.Domain.Models;

namespace PartyMaker.Application.Services;

public class ItemService : IItemService
{
    private readonly IItemDao _itemDao;

    public ItemService(IItemDao itemDao)
    {
        _itemDao = itemDao;
    }

    //Not implement becouse i think we must updated by different parts
    public void Update(ItemDto item)
    {
        throw new NotImplementedException();
    }

    public void Delete(Guid id) => _itemDao.Delete(id);
}