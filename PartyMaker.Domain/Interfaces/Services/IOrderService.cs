using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Models;

namespace PartyMaker.Domain.Interfaces.Services;

public interface IOrderService
{
    Guid? Create(Guid customerId, List<ItemDto> items);

    void Delete(Guid id);

    OrderDto GetById(Guid id);

    Customer GetCustomerByOrderId(Guid orderId);
    void ReceivedItem(Guid itemRequestId);
    void DeliveryItem(Guid itemRequestId);
}