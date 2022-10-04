using PartyMaker.Domain.Entities;

namespace PartyMaker.Web.Admin.Models.Suppliers;

public class SupplierModel
{
    public Guid Id { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string CompanyName { get; set; }
    public string City { get; set; }
    public string Email { get; set; }
    public string? Phone { get; set; }
    public bool IsDeleted { get; set; }    
}