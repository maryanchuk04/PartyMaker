using PartyMaker.Domain.Interfaces.Dao;

namespace PartyMaker.MsSqlDatabase.Dao;

public class CustomerDao : ICustomerDao
{
    private readonly PartyMakerContext _context;

    public CustomerDao(PartyMakerContext context)
    {
        _context = context;
    }

    public Guid GetCustomerIdByUserId(Guid userId)
    {
        var customer = _context.Customers.FirstOrDefault(x => x.UserId == userId.ToString());
        if (customer == null)
        {
            return Guid.Empty;
        }
        return customer.Id;
    }
}