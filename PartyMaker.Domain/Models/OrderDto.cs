using PartyMaker.Domain.Enumerations;

namespace PartyMaker.Domain.Models;

public class OrderDto
{
    public Guid Id { get; set; }
    public DateTime Date { get; set; }
    public OrderStatus OrderStatus { get; set; }
    public double TotalPrice { get; set; }
    public ICollection<ItemDto> Items { get; set; }
}