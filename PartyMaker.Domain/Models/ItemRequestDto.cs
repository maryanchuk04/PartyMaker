using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Enumerations;

namespace PartyMaker.Domain.Models;

public class ItemRequestDto
{
    public Guid? ServiceId { get; set; }
    public Guid? SupplierId { get; set; }
    public Guid? SupplierServiceId { get; set; }
    public DateTime? DateModified { get; set; }
    public RequestStatus? RequestStatus { get; set; }
    public string? Response { get; set; }
    public double? Price { get; set; }
    public SupplierServiceDto? SupplierService { get; set; }
    public DateTime? DateCreated { get; set; }
    public Guid? Id { get; set; }

}