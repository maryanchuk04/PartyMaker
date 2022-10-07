using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Enumerations;
using PartyMaker.Domain.Interfaces.Dao;
using PartyMaker.Domain.Interfaces.Services;

namespace PartyMaker.Application.Services;

public class CustomerService : ICustomerService
{
    private readonly ICustomerDao _customerDao;
    private readonly IItemRequestDao _itemRequestDao;

    public CustomerService(ICustomerDao customerDao, IItemRequestDao itemRequestDao)
    {
        _customerDao = customerDao;
        _itemRequestDao = itemRequestDao;
    }

    public Guid GetCustomerIdByUserId(Guid userId)
    {
        return _customerDao.GetCustomerIdByUserId(userId);
    }

    public void ApproveRequest(Guid itemRequestId)
    {
        var itemRequest = _itemRequestDao.GetItemRequestById(itemRequestId);
        if (itemRequest == null)
        {
            return;
        }

        itemRequest.RequestStatus = RequestStatus.Accepted;
        itemRequest.Item.AcceptedItemRequest = itemRequest;
        itemRequest.DateModified = DateTime.Now;
        itemRequest.Item.AcceptedItemRequestId = itemRequestId;
        itemRequest.Item.ItemStatusHistory.Add(new ItemStatusHistory()
        {
            DateChanged = DateTime.Now,
            Item = itemRequest.Item,
            ItemStatus = ItemStatus.InProgress
        });
        itemRequest.Item.ItemStatus = ItemStatus.InProgress;
        _itemRequestDao.UpdateItemRequest(itemRequest);
    }

    public void CancelRequest(Guid itemRequestId)
    {
        _itemRequestDao.CancelItemRequest(itemRequestId);
    }
}