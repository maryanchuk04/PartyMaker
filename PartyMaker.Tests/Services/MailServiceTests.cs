using Moq;
using PartyMaker.Application.Services;
using PartyMaker.Domain.Interfaces.Infrastructure;
using System.Reflection;
using Xunit;

namespace PartyMaker.Tests.Services;

public class MailServiceTests
{
    [Fact]
    public void SendRegistrationMailAsyncShouldShouldSendEmailToCustomerAboutHisSuccessfulRegistration()
    {
        // Arrange
        var mailClientMock = new Mock<IMailClient>();
        var service = new MailService(mailClientMock.Object);
        var partyMakerName = service.GetType().GetField("_partyMakerName", BindingFlags.NonPublic | BindingFlags.Static).GetValue(service) as string;
        var partyMakerEmail = service.GetType().GetField("_partyMakerEmail", BindingFlags.NonPublic | BindingFlags.Static).GetValue(service) as string;
        var customerEmail = "partymakercustomer@gmail.com";
        var subject = "Wellcome to PartyMaker!";
        var htmlContent = $"<img src='https://i.ibb.co/cr9pDdT/flags-1.png' alt='wellcome'/><br/><h3>Wellcome to family dear {customerEmail}!!!</h3><br/>";

        // Act
        service.SendRegistrationMailAsync(customerEmail);

        // Assert
        mailClientMock.Verify(r => r.SendHtmlMessageAsync(subject,htmlContent, partyMakerEmail, customerEmail, partyMakerName));
    }

    [Fact]
    public void SendContactUsMessageAsyncShouldShouldSendContactUsEmailToPartyMaker()
    {
        // Arrange
        var mailClientMock = new Mock<IMailClient>();
        var service = new MailService(mailClientMock.Object);
        var partyMakerName = service.GetType().GetField("_partyMakerName", BindingFlags.NonPublic | BindingFlags.Static).GetValue(service) as string;
        var partyMakerEmail = service.GetType().GetField("_partyMakerEmail", BindingFlags.NonPublic | BindingFlags.Static).GetValue(service) as string;
        var email = "user@gmail.com";
        var name = "John Doe";
        var message = "Hello, PartyMaker";
        var subject = "Contact Us";
        var plainContent = $"From: {email}\nName: {name}\nContactUs message : {message}";

        // Act
        service.SendContactUsMessageAsync(email, name, message);

        // Assert
        mailClientMock.Verify(r => r.SendTextMessageAsync(subject, plainContent, partyMakerEmail, partyMakerEmail, name));
    }
}