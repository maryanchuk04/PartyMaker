using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Interfaces.Dao;

namespace PartyMaker.MsSqlDatabase.Dao;

public class ServicesDao : IServicesDao
{
    private readonly PartyMakerContext _context;

    public ServicesDao(PartyMakerContext context)
    {
        _context = context;
    }

    public List<Service> GetServices()
    {
        return _context.Services.Where(s => !s.IsDeleted).ToList();
    }

    public Service Create(string name, string description, DateTime createdDate)
    {
        var service = new Service
        {
            Name = name,
            Description = description,
            DateCreated = createdDate,
            DateUpdated = createdDate
        };
        _context.Services.Add(service);  
        _context.SaveChanges();
        return service;
    }

    public Service Update(Guid id, string name, string description, DateTime updatedDate)
    {
        var service = _context.Services.FirstOrDefault(s => s.Id == id);
        if (service == null)
        {
            return null;
        }
        service.Name = name;
        service.Description = description;
        service.DateUpdated = updatedDate;
        _context.SaveChanges();
        return service;
    }

    public Service GetById(Guid id)
    {
        return _context.Services.FirstOrDefault(s => s.Id == id);
    }

    public void Deactivate(Guid id, DateTime updatedDate)
    {
        var service = _context.Services.FirstOrDefault(s => s.Id == id);
        if (service == null)
        {
            return;
        }
        service.IsDeleted = true;
        service.DateUpdated = updatedDate;
        _context.SaveChanges();
    }
}