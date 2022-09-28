using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Interfaces.Dao;

namespace PartyMaker.MsSqlDatabase.Dao;

public class SupplierServiceDao : ISupplierServiceDao
{
    private readonly PartyMakerContext _context;

    public SupplierServiceDao(PartyMakerContext context)
    {
        _context = context;
    }

    public void Create(string description, string imageUrl, Guid supplierId, Guid serviceId)
    {
        var supplier = _context.Suppliers.FirstOrDefault(x => x.Id == supplierId);
        var service = _context.Services.FirstOrDefault(x => x.Id == serviceId);
        if (service == null || supplier == null)
        {
            return;
        }

        SupplierService supplierService = new SupplierService()
        {
            Description = description,
            Image = new Image() {Url = imageUrl},
            Service = service,
            Supplier = supplier
        };
        _context.SupplierServices.Add(supplierService);
        _context.SaveChanges();
    }

    public void Update(string description, string imageUrl, Guid supplierId, Guid serviceId)
    {
        var supplier = _context.Suppliers.FirstOrDefault(x => x.Id == supplierId);
        var service = _context.Services.FirstOrDefault(x => x.Id == serviceId);
        if (service == null || supplier == null)
        {
            return;
        }

        SupplierService supplierService = new SupplierService()
        {
            Description = description,
            Image = new Image() {Url = imageUrl},
            Supplier = supplier,
            Service = service
        };
        _context.SupplierServices.Update(supplierService);
        _context.SaveChanges();
    }

    public void Delete(Guid id)
    {
        var supplierService = _context.SupplierServices.FirstOrDefault(x => x.Id == id);
        if (supplierService == null)
        {
           return;
        }
        _context.SupplierServices.Remove(supplierService);
        _context.SaveChanges();
    }
}