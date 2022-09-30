namespace PartyMaker.Domain.Models;

public class AddressDto
{
    public Guid? Id { get; set; }
    public string Location { get; set; }
    public double? Longitude { get; set; }
    public double? Latitude { get; set; }
}