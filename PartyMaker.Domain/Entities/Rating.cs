namespace PartyMaker.Domain.Entities;

public class Rating
{
    public Guid Id { get; set; }
    public string Feedback { get; set; }
    public int Stars { get; set; }

    public Item Item { get; set; }
}