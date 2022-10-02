using PartyMaker.Domain.Enumerations;

namespace PartyMaker.Domain.Models;

public class ItemDto
{
    public Guid? Id { get; set; }
    public DateTime? DateCreated { get; set; }
    public int? Qty { get; set; }
    public int? Price { get; set; }
    public int? TotalPrice { get; set; }
    public ItemStatus? ItemStatus { get; set; }
    public string? Description { get; set; }
    public DateTime? DateExecution { get; set; }

    public Guid? OrderId { get; set; }
    public AddressDto? AddressDto { get; set; }

    public Guid? AcceptedItemRequestId { get; set; }

    public List<ItemRequestDto>? ItemRequestDtos { get; set; }
}