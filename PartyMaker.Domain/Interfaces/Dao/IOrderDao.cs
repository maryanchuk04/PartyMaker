using PartyMaker.Domain.Entities;

namespace PartyMaker.Domain.Interfaces.Dao;

public interface IOrderDao
{
    Guid Create(Guid customerId, List<Item> items, double totalPrice);
    void Delete(Guid id);
    Order GetOrderById(Guid id);
    Customer GetCustomerByOrderId(Guid orderId);
}