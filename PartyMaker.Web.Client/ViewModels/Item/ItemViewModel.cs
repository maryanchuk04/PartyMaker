using PartyMaker.Domain.Enumerations;

namespace PartyMaker.ViewModels.Order;

public class ItemViewModel
{
    public int Qty { get; set; }
    public int Price { get; set; }
    public string? Description { get; set; }
    public ItemStatus ItemStatus { get; set; }
    public Guid? OrderId { get; set; }
    public DateTime DateExecution { get; set; }
    public AddressViewModel Address { get; set; }
    public List<ItemRequestViewModel> ItemRequests { get; set; }

}
