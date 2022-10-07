using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Models;

namespace PartyMaker.Domain.Interfaces.Services;

public interface IServicesService
{
    List<Service> GetServices();
    Service UpsertService(ServiceUpsertModel upsertModel);
    Service GetById(Guid id);
    void Deactivate(Guid id);
    void Activate(Guid id);
    List<Service> GetFiltredServices();

}