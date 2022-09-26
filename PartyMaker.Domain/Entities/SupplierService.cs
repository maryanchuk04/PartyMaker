namespace PartyMaker.Domain.Entities;

public class SupplierService
{
    public Guid Id { get; set; }
    public string Description { get; set; }

    public Image? Image { get; set; }
    public Supplier Supplier { get; set; }
    public Service Service { get; set; }
}