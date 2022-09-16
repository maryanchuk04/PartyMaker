namespace PartyMaker.Domain.Entities;

public class Supplier
{
    public Guid Id { get; set; }
    public string CompanyName { get; set; }
    public string City { get; set; }
    public string Email { get; set; }
    public string? Phone { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }

    public Image? Image { get; set; }

    public ICollection<SupplierService> SupplierServices { get; set; }
}