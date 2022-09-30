using PartyMaker.Domain.Entities;

namespace PartyMaker.Domain.Interfaces.Dao;

public interface IOrderDao
{
    void Create(Guid customerId, List<Item> items, double totalPrice);

    void Delete(Guid id);
}