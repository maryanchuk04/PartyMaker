namespace PartyMaker.Domain.Entities;

public class Customer
{
    public Guid Id { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }
    public string? Phone { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public int? Age { get; set; }

    public string UserId { get; set; }
    public PartyMakerUser User { get; set; }
    public Image? Image { get; set; }

    public ICollection<Order> Orders { get; set; }
}