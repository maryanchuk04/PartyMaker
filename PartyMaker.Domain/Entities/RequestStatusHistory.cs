using PartyMaker.Domain.Enumerations;

namespace PartyMaker.Domain.Entities;

public class RequestStatusHistory
{
    public Guid Id { get; set; }
    public RequestStatus RequestStatus { get; set; }
    public DateTime DateChanged { get; set; }

    public ItemRequest ItemRequest { get; set; }
}