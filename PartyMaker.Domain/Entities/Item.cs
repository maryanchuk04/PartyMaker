using PartyMaker.Domain.Enumerations;

namespace PartyMaker.Domain.Entities;

public class Item
{
    public Guid Id { get; set; }
    public DateTime DateCreated { get; set; }
    public int Qty { get; set; }
    public int Price { get; set; }
    public int TotalPrice { get; set; }
    public ItemStatus ItemStatus { get; set; }

    public Order Order { get; set; }
    public Address Address { get; set; }

    public Guid? AcceptedItemRequestId { get; set; }
    public ItemRequest? AcceptedItemRequest { get; set; }

    public ICollection<ItemStatusHistory> ItemStatusHistory { get; set; }
    public ICollection<ItemRequest> ItemRequests { get; set; }
}