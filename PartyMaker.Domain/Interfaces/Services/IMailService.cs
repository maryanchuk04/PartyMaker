namespace PartyMaker.Domain.Interfaces.Services;

public interface IMailService
{
    Task SendRegistrationMailAsync(string email);

    Task SendContactUsMessageAsync(string email, string name, string message);
}