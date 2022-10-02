using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Interfaces.Dao;
using PartyMaker.Domain.Interfaces.Services;

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

    public Supplier GetSuppliersInfoById(Guid id)
    {
        return _suppliersDao.GetSuppliersInfoById(id);
    }

    public List<Supplier> GetByServiceId(Guid id)
    {
        return _suppliersDao.GetByServiceId(id);
    }

    public void CreateSupplierService(Guid supplierId, Guid serviceId, string description, string imageUrl)
    {
        _supplierServiceDao.Create(description, imageUrl, supplierId, serviceId);
    }
}