using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Models;

namespace PartyMaker.Domain.Interfaces.Services;

public interface IItemService
{
    Task<Item> Create(ItemDto item);

    Task<Item> Update(ItemDto item);

    Task Delete(Guid id);
}