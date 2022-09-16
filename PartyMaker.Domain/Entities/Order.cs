using PartyMaker.Domain.Enumerations;

namespace PartyMaker.Domain.Entities;

public class Order
{
    public Guid Id { get; set; }
    public DateTime Date { get; set; }
    public OrderStatus OrderStatus { get; set; }
    public double TotalPrice { get; set; }

    public Customer Customer { get; set; }

    public ICollection<Item> Items { get; set; }
}