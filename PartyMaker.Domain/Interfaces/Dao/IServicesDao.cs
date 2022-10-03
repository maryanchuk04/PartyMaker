using PartyMaker.Domain.Entities;

namespace PartyMaker.Domain.Interfaces.Dao;

public interface IServicesDao
{
    List<Service> GetServices();
    Service Create(string name, string description, DateTime createdDate);
    Service Update(Guid id, string name, string description, DateTime updatedDate);
    Service GetById(Guid id);
    void Deactivate(Guid id, DateTime updatedDate);
    void Activate(Guid id, DateTime updatedDate);
}