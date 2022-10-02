using PartyMaker.Domain.Entities;

namespace PartyMaker.Domain.Models;

public class SupplierServiceDto
{
    public Guid Id { get; set; }
    public Guid SupplierId { get; set; }
    public string SupplierCompanyName { get; set; }
    public Service Service { get; set; }
    public string Description { get; set; }
}