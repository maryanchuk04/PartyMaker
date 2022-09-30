using Microsoft.EntityFrameworkCore;
using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Interfaces.Dao;

namespace PartyMaker.MsSqlDatabase.Dao;

public class SupplierDao : ISupplierDao
{
    private readonly PartyMakerContext _context;

    public SupplierDao(PartyMakerContext context)
    {
        _context = context;
    }


    public Supplier GetById(Guid id)
    {
        var supplier = _context.Suppliers
            .Include(x => x.SupplierServices)
            .Include(x=>x.User)
            .FirstOrDefault(x => x.Id == id);
        return supplier;
    }

    public List<Supplier> GetByServiceId(Guid id)
    {
        return _context.SupplierServices
            .Include(x => x.Service)
            .Include(x => x.Supplier)
            .Where(x=>x.Service.Id == id)
            .Select(x=>x.Supplier)
            .ToList();
    }
}