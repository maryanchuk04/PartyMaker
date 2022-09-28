using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Models;

namespace PartyMaker.Domain.Interfaces.Services;

public interface IItemRequestService
{
    void Update(ItemRequestDto itemRequest);

    void Delete(Guid id);
}