using Microsoft.AspNetCore.Identity;

namespace PartyMaker.Domain.Entities;

public class PartyMakerUser : IdentityUser
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string Email { get; set; }
    public string? Phone { get; set; }
    public Image? Image { get; set; }
    public Customer Customer { get; set; }
    public Supplier Supplier { get; set; }
}