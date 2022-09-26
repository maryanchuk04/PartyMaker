using PartyMaker.Domain.Interfaces.Infrastructure;
using PartyMaker.Infrastructure.Configuration;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace PartyMaker.Infrastructure.SendGrid;

public class MailClient : IMailClient
{
    private readonly MailClientConfiguration _mailClientConfiguration;
    private readonly SendGridClient _client;

    public MailClient(MailClientConfiguration mailClientConfiguration)
    {
        _mailClientConfiguration = mailClientConfiguration;
        _client = new SendGridClient(_mailClientConfiguration.ApiKey);
    }

    public async Task SendMessageAsync(string subject, string plainContent, string htmlContent, string from, string to, string fromUserName)
    {
        var mailFrom = new EmailAddress(from, fromUserName);
        var mailTo = new EmailAddress(to);
        var msg = MailHelper.CreateSingleEmail(mailFrom, mailTo, subject, plainContent, htmlContent);
        //await _client.SendEmailAsync(msg);
    }
}