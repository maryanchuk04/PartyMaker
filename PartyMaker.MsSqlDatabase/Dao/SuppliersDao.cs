﻿using Microsoft.EntityFrameworkCore;
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

    public Supplier GetSuppliersInfoById(Guid id)
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