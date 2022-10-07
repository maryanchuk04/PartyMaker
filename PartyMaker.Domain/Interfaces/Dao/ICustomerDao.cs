using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Enumerations;

namespace PartyMaker.Domain.Interfaces.Dao;

public interface ICustomerDao
{
    Guid GetCustomerIdByUserId(Guid userId);
    Customer GetCustomerById(Guid id);
    void ChangeInfo(Guid customerId, string email, string userName, int age, string firstName, string lastName);
    List<Order> GetFilteredOrders(Guid id, OrderStatus orderStatus);
}