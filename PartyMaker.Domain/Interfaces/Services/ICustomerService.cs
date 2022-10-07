using PartyMaker.Domain.Entities;

namespace PartyMaker.Domain.Interfaces.Services;

public interface ICustomerService
{
    Guid GetCustomerIdByUserId(Guid userId);

    void ApproveRequest(Guid itemRequestId);

    void CancelRequest(Guid itemRequestId);
}