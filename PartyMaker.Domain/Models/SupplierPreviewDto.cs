namespace PartyMaker.Domain.Models;

public class SupplierPreviewDto
{
    public string CompanyName { get; set; }
    public Guid Id { get; set; }
    public List<string> Services { get; set; }
    public float AverageRating { get; set; }
    public string? Image { get; set; }
}