using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Interfaces.Dao;
using PartyMaker.Domain.Interfaces.Services;

namespace PartyMaker.Application.Services;

public class CustomerService : ICustomerService
{
    private readonly ICustomerDao _customerDao;

    public CustomerService(ICustomerDao customerDao)
    {
        _customerDao = customerDao;
    }

    public Guid GetCustomerIdByUserId(Guid userId)
    {
        return _customerDao.GetCustomerIdByUserId(userId);
    }
}