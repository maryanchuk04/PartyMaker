namespace PartyMaker.Domain.Models;

public class SupplierDto
{
    public Guid Id { get; set; }
    public string CompanyName { get; set; }
    public string Email { get; set; }
    public string? City { get; set; }
    public string? Phone { get; set; }
    public string? ImageUrl { get; set; }
    public string? Description { get; set; }
    public bool? IsDeleted { get; set; }
    public List<SupplierServiceDto>? SupplierServices { get; set; }
}