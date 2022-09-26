namespace PartyMaker.Domain.Interfaces.Services;

public interface IMailService
{
    Task SendRegistrationMailAsync(string email);
}