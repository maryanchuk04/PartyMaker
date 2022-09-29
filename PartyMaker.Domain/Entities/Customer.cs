namespace PartyMaker.Domain.Entities;

public class Customer
{
    public Guid Id { get; set; }
    public string UserName { get; set; }
    public int? Age { get; set; }

    public string UserId { get; set; }
    public PartyMakerUser User { get; set; }

    public ICollection<Order> Orders { get; set; }
}