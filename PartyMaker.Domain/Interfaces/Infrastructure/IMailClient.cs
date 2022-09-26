namespace PartyMaker.Domain.Interfaces.Infrastructure;

public interface IMailClient
{
    Task SendMessageAsync(string subject, string plainContent, string htmlContent, string from, string to, string fromUserName);
}