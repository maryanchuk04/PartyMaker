using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Models;

namespace PartyMaker.Domain.Interfaces.Services;

public interface ICustomerService
{
    Guid GetCustomerIdByUserId(Guid userId);
    CustomerDto GetById(Guid id);
    void ChangeCustomerInfo(Guid customerId, string email, string userName, int age, string firstName, string lastName);
    List<OrderPreviewDto> GetFilterOrders(Guid id, int state);
    void ApproveRequest(Guid itemRequestId);
    void CancelRequest(Guid itemRequestId);
}