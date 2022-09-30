using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Enumerations;

namespace PartyMaker.Domain.Models;

public class ItemRequestDto
{
    public Guid SupplierServiceId { get; set; }
    public Guid ServiceId { get; set; }
    public Guid SupplierId { get; set; }
}