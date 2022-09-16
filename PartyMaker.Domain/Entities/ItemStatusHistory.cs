using PartyMaker.Domain.Enumerations;

namespace PartyMaker.Domain.Entities;

public class ItemStatusHistory
{
    public Guid Id { get; set; }
    public ItemStatus ItemStatus { get; set; }
    public DateTime DateChanged { get; set; }

    public Item Item { get; set; }
}