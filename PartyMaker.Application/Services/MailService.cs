using PartyMaker.Domain.Interfaces.Infrastructure;
using PartyMaker.Domain.Interfaces.Services;

namespace PartyMaker.Application.Services;

public class MailService : IMailService
{
    private const string _fromUserName = "PartyMaker";
    private const string _fromEmail = "partymaker.sigma@gmail.com";
    private readonly IMailClient _mailClient;

    public MailService(IMailClient mailClient)
    {
        _mailClient = mailClient;
    }

    public async Task SendRegistrationMailAsync(string email)
    {
        var subject = "Wellcome to PartyMaker!";
        var htmlContent = $"<img src='https://i.ibb.co/cr9pDdT/flags-1.png' alt='wellcome'/><br/><h3>Wellcome to family dear {email}!!!</h3><br/>";
        await _mailClient.SendMessageAsync(subject, "", htmlContent,_fromEmail, email, _fromUserName);
    }
}