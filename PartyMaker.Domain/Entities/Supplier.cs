namespace PartyMaker.Domain.Entities;

public class Supplier
{
    public Guid Id { get; set; }
    public string CompanyName { get; set; }
    public string? City { get; set; }
    public bool IsDeleted { get; set; }
    public string? Description { get; set; }
    public string UserId { get; set; }
    public PartyMakerUser User { get; set; }

    public ICollection<SupplierService> SupplierServices { get; set; }
    public ICollection<Rating> Ratings { get; set; }
}