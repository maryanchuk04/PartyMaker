﻿using PartyMaker.Domain.Entities;
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
}