using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Interfaces.Dao;
using PartyMaker.Domain.Interfaces.Services;
using PartyMaker.Domain.Models;

namespace PartyMaker.Application.Services;

public class ServicesService : IServicesService
{
    private readonly IServicesDao _servicesDao;

    public ServicesService(IServicesDao servicesDao)
    {
        _servicesDao = servicesDao;
    }

    public List<Service> GetServices()
    {
        return _servicesDao.GetServices();
    }

    public Service UpsertService(ServiceUpsertModel upsertModel)
    {
        if(upsertModel.Id.HasValue)
        {
            return _servicesDao.Update(upsertModel.Id.Value, upsertModel.Name, upsertModel.Description,DateTime.Now);
        }
        else
        {
            return _servicesDao.Create(upsertModel.Name, upsertModel.Description, DateTime.Now);
        }
    }

    public Service GetById(Guid id)
    {
        return _servicesDao.GetById(id);
    }

    public void Deactivate(Guid id)
    {
        _servicesDao.Deactivate(id, DateTime.Now);
    }

    public void Activate(Guid id)
    {
        _servicesDao.Activate(id, DateTime.Now);
    }

    public List<Service> GetFiltredServices()
    {
        return _servicesDao.GetFiltredServices();
    }
}