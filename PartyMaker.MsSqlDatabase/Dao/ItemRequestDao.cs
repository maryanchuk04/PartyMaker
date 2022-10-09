using Microsoft.EntityFrameworkCore;
using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Enumerations;
using PartyMaker.Domain.Interfaces.Dao;

namespace PartyMaker.MsSqlDatabase.Dao;

public class ItemRequestDao : IItemRequestDao
{
    private readonly PartyMakerContext _context;

    public ItemRequestDao(PartyMakerContext context)
    {
        _context = context;
    }

    public void Update(Guid id, string response, double price,
        RequestStatus requestStatus, Guid supplierServiceId, Guid itemId)
    {
        var itemRequest = _context.ItemRequests.FirstOrDefault(x => x.Id == id);
        var item = _context.Items.FirstOrDefault(x => x.Id == itemId);
        var supplierService = _context.SupplierServices.FirstOrDefault(x => x.Id == supplierServiceId);
        if (itemRequest == null || item == null || supplierService == null)
        {
            return;
        }

        var updatedItemRequest = new ItemRequest()
        {
            Id = id,
            DateCreated = itemRequest.DateCreated,
            Item = item,
            DateModified = DateTime.Now,
            RequestStatus = requestStatus,
            Response = response,
            Price = price,
            SupplierService = supplierService,
            ItemId = itemId,
        };
        _context.ItemRequests.Update(updatedItemRequest);
        _context.SaveChanges();
    }

    public void Delete(Guid id)
    {
        var itemRequest = _context.ItemRequests.FirstOrDefault(x=>x.Id == id);
        if (itemRequest == null)
        {
            return;
        }
        _context.ItemRequests.Remove(itemRequest);
        _context.SaveChanges();
    }

    public ItemRequest GetItemRequestById(Guid id)
    {
        return _context.ItemRequests
            .Include(x => x.Item)
                .ThenInclude(x => x.ItemStatusHistory)
            .Include(x => x.Item)
            .ThenInclude(x => x.Order)
                .ThenInclude(x=>x.Items)
            .FirstOrDefault(x => x.Id == id);
    }

    public void UpdateItemRequest(ItemRequest itemRequest)
    {
        if (itemRequest == null)
        {
            return;
        }

        _context.ItemRequests.Update(itemRequest);
        _context.SaveChanges();
    }

    public void CancelItemRequest(Guid itemRequestId)
    {
        var res = GetItemRequestById(itemRequestId);
        if (res == null)
        {
            return;
        }

        _context.ItemRequests.Remove(res);
        _context.SaveChanges();
    }
}