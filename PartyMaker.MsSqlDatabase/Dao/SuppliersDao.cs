using Microsoft.EntityFrameworkCore;
using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Interfaces.Dao;

namespace PartyMaker.MsSqlDatabase.Dao;

public class SuppliersDao : ISuppliersDao
{
    private readonly PartyMakerContext _context;

    public SuppliersDao(PartyMakerContext context)
    {
        _context = context;
    }

    public List<Supplier> GetSupliers()
    {
        return _context.Suppliers.Include(sup => sup.User).ToList(); 
    }
    public Supplier GetById(Guid id)
    {
        return _context.Suppliers.FirstOrDefault(x => x.Id == id);
    }
}