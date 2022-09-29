using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Interfaces.Dao;
using PartyMaker.Domain.Interfaces.Services;
using PartyMaker.Domain.Models;

namespace PartyMaker.Application.Services;

public class ItemRequestService : IItemRequestService
{
    private readonly IItemRequestDao _itemRequestDao;

    public ItemRequestService(IItemRequestDao itemRequestDao)
    {
        _itemRequestDao = itemRequestDao;
    }

    public void Update(ItemRequestDto itemRequest)
    {
        throw new NotImplementedException();
    }

    public void Delete(Guid id)
    {
        _itemRequestDao.Delete(id);
    }
}