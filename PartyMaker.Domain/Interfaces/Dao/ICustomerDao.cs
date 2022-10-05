namespace PartyMaker.Domain.Interfaces.Dao;

public interface ICustomerDao
{
    Guid GetCustomerIdByUserId(Guid userId);
}