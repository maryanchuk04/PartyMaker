using Microsoft.AspNetCore.Mvc;
using PartyMaker.Domain.Interfaces.Services;
using PartyMaker.ViewModels.ContactUs;

namespace PartyMaker.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactUsController : ControllerBase
{
    private readonly IMailService _mailService;

    public ContactUsController(IMailService mailService)
    {
        _mailService = mailService;
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> SendMessageAsync(ContactUsViewModel contactUsViewModel)
    {
        await _mailService.SendContactUsMessageAsync(contactUsViewModel.Email, contactUsViewModel.Name, contactUsViewModel.Message);
        return Ok();
    }
}