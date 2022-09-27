using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Models;

namespace PartyMaker.Domain.Interfaces.Services;

public interface IItemRequestService
{
    Task<ItemRequest> Create(ItemRequestDto itemRequest);

    Task<ItemRequest> Update(ItemRequestDto itemRequest);

    Task Delete(Guid id);
}