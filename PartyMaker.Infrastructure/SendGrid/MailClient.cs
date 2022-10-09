using System.Net.Mail;
using MimeKit;
using MailKit.Security;
using MimeKit.Text;
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

    public async Task SendTextMessageAsync(string subject, string plainContent, string from, string to, string fromUserName)
    {
        MimeMessage message = new MimeMessage();
        message.From.Add(new MailboxAddress(fromUserName,from));
        message.To.Add(new MailboxAddress(to, to));
        message.Subject = subject;
        message.Body = new BodyBuilder
        {
            TextBody = plainContent
        }.ToMessageBody();
        await SendMessageAsync(message);
    }

    public async Task SendHtmlMessageAsync(string subject, string htmlContent, string @from, string to, string fromUserName)
    {
        MimeMessage message = new MimeMessage();
        message.From.Add(new MailboxAddress(fromUserName,from));
        message.To.Add(new MailboxAddress(to, to));
        message.Subject = subject;
        message.Body = new TextPart(TextFormat.Html) { Text = htmlContent };
        await SendMessageAsync(message);
    }

    private async Task SendMessageAsync(MimeMessage message)
    {
        using MailKit.Net.Smtp.SmtpClient client = new MailKit.Net.Smtp.SmtpClient();
        try
        {
            await client.ConnectAsync("smtp.gmail.com", 465, true);
            await client.AuthenticateAsync(_mailClientConfiguration.AuthUserName, _mailClientConfiguration.AuthPassword);
            await client.SendAsync(message);
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await client.DisconnectAsync(true);
        }
    }
}