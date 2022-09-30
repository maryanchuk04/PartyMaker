using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Interfaces.Dao;

namespace PartyMaker.MsSqlDatabase.Dao;

public class ItemDao : IItemDao
{
    private readonly PartyMakerContext _context;

    public ItemDao(PartyMakerContext context)
    {
        _context = context;
    }

    public void Update(Item item)
    {
        _context.Items.Update(item);
        _context.SaveChanges();
    }

    public void Delete(Guid id)
    {
        var item = _context.Items.FirstOrDefault(x=>x.Id == id);
        if (item == null)
        {
            return;
        }
        _context.Items.Remove(item);
        _context.SaveChanges();
    }
}