using Microsoft.EntityFrameworkCore;
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

    public void Update(string description, string imageUrl, Guid serviceId, Guid supplierServiceId)
    {
        var supplierService = _context.SupplierServices
            .Include(x => x.Image)
            .Include(x => x.Service)
            .Include(x => x.Supplier).FirstOrDefault(x => x.Id == supplierServiceId);

        var service = _context.Services.FirstOrDefault(x => x.Id == serviceId);
        if (supplierService == null || service == null)
        {
            return;
        }

        if (supplierService.Image == null)
        {
            supplierService.Image = new Image()
            {
                Url = imageUrl
            };
        }
        else supplierService.Image.Url = imageUrl;

        supplierService.Description = description;
        supplierService.Service = service;
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

    public List<SupplierService> GetSupplierServices(Guid supplierId)
    {
        return _context.SupplierServices
            .Include(sup => sup.Image)
            .Include(sup => sup.Service)
            .Where(x => x.SupplierId == supplierId)
            .ToList();
    }

    public SupplierService GetById(Guid id)
    {
        return _context.SupplierServices
            .Include(x => x.Service)
            .Include(x => x.Supplier)
            .FirstOrDefault(x => x.Id == id);
    }

    public SupplierService GetSupplierService(Guid serviceId, Guid supplierId)
    {
        return _context.SupplierServices
            .Include(x => x.Service)
            .Include(x => x.Supplier)
            .Where(x=>x.Supplier.IsDeleted == false)
            .FirstOrDefault(x => x.SupplierId == supplierId && x.Service.Id == serviceId);
    }
}