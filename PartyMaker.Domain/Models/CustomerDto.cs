namespace PartyMaker.Domain.Models;

public class CustomerDto
{
    public Guid Id { get; set; }
    public string UserName { get; set; }
    public int? Age { get; set; }
    public string Email { get; set; }
    public string UserId { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Image { get; set; }
    public List<OrderPreviewDto> Orders { get; set; }
}