using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Interfaces.Dao;
using PartyMaker.Domain.Interfaces.Services;
using PartyMaker.Domain.Models;

namespace PartyMaker.Application.Services;

public class SuppliersService : ISuppliersService
{
    private readonly ISuppliersDao _suppliersDao;
    private readonly ISupplierServiceDao _supplierServiceDao;

    public SuppliersService(ISuppliersDao suppliersDao, ISupplierServiceDao supplierServiceDao)
    {
        _suppliersDao = suppliersDao;
        _supplierServiceDao = supplierServiceDao;
    }

    public List<Supplier> GetSuppliers()
    {
        return _suppliersDao.GetSupliers();
    }

    public Supplier GetById(Guid id)
    {
        return _suppliersDao.GetById(id);
    }

    public List<SupplierService> GetSupplierServices(Guid supplierId)
    {
        return _supplierServiceDao.GetSupplierServices(supplierId);
    }

    public SupplierDto GetSuppliersInfoById(Guid id)
    {
        var supplier = _suppliersDao.GetSuppliersInfoById(id);
        var supplierDto = new SupplierDto()
        {
            Id = supplier.Id,
            Email = supplier.User.Email,
            City = supplier.City,
            CompanyName = supplier.CompanyName,
            Phone = supplier.User.Phone,
            ImageUrl = supplier.User.Image?.Url,
            Description = supplier.Description,
            SupplierServices = new List<SupplierServiceDto>()
        };

        foreach (var supplierService in supplier.SupplierServices)
        {
            supplierDto.SupplierServices.Add(new SupplierServiceDto()
            {
                Description = supplierService.Description,
                Id = supplierService.Id,
                SupplierId = supplier.Id,
                Service = supplierService.Service,
                ImageUrl = supplierService.Image?.Url,
                SupplierCompanyName = supplierService.Supplier.CompanyName
            });
        }

        return supplierDto;
    }

    public List<Supplier> GetByServiceId(Guid id)
    {
        return _suppliersDao.GetByServiceId(id);
    }

    public void CreateSupplierService(Guid supplierId, Guid serviceId, string description, string imageUrl)
    {
        _supplierServiceDao.Create(description, imageUrl, supplierId, serviceId);
    }

    public void ChangeSupplierServiceInfo(Guid supplierServiceId,Guid serviceId,string description, string imageUrl)
    {
        _supplierServiceDao.Update(description, imageUrl, serviceId, supplierServiceId);
    }

    public void ChangeSupplierMainInfo(Guid supplierId, string companyName, string phone, string city, string description)
    {
        _suppliersDao.ChangeMainInfo(supplierId, companyName, phone, city,description);
    }

    public void Deactivate(Guid id)
    {
        _suppliersDao.Deactivate(id);
    }

    public void Activate(Guid id)
    {
        _suppliersDao.Activate(id);
    }
}