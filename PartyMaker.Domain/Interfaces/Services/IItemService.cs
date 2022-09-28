using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Models;

namespace PartyMaker.Domain.Interfaces.Services;

public interface IItemService
{
    void Update(ItemDto item);

    void Delete(Guid id);
}