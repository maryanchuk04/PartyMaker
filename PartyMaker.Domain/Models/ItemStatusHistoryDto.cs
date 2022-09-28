using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Enumerations;

namespace PartyMaker.Domain.Models;

public class ItemStatusHistoryDto
{
    public Guid Id { get; set; }
    public ItemStatus ItemStatus { get; set; }
    public DateTime DateChanged { get; set; }

    public Guid ItemId { get; set; }
}