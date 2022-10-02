using PartyMaker.Domain.Enumerations;

namespace PartyMaker.ViewModels.Order;

public class OrderViewModel
{
    public Guid CustomerId { get; set; }
    public List<ItemViewModel> Items { get; set; }
}