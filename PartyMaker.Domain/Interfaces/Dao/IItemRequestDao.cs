using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Enumerations;

namespace PartyMaker.Domain.Interfaces.Dao;

public interface IItemRequestDao
{
    void Update(Guid id, string description, string response, double price, RequestStatus requestStatus, Guid supplierServiceId, Guid itemId);

    void Delete(Guid id);
}