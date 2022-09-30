using PartyMaker.Domain.Enumerations;

namespace PartyMaker.Domain.Entities;

public class ItemRequest
{
    public Guid Id { get; set; }
    public DateTime DateCreated { get; set; }
    public string Description { get; set; }
    public DateTime DateModified { get; set; }
    public string Response { get; set; }
    public double Price { get; set; }
    public RequestStatus RequestStatus { get; set; }

    public SupplierService SupplierService { get; set; }
   
    public Guid ItemId { get; set; }
    public Item Item { get; set; }
}