namespace PartyMaker.Domain.Entities;

public class Address
{
    public Guid Id { get; set; }
    public string Location { get; set; }
    public double? Longitude { get; set; }
    public double? Latitude { get; set; }
}