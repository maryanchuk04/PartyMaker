using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Enumerations;

namespace PartyMaker.Domain.Interfaces.Dao;

public interface IItemRequestDao
{
    void Update(Guid id, string response, double price, RequestStatus requestStatus, Guid supplierServiceId, Guid itemId);

    void Delete(Guid id);
    ItemRequest GetItemRequestById(Guid id);
    void UpdateItemRequest(ItemRequest itemRequest);
    void CancelItemRequest(Guid itemRequestId);
}