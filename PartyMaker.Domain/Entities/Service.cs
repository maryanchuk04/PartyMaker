namespace PartyMaker.Domain.Entities;

public class Service
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public DateTime DateCreated { get; set; }
    public DateTime DateUpdated { get; set; }   
    public bool IsDeleted { get; set; }
}