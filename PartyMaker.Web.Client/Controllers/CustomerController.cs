using Microsoft.AspNetCore.Mvc;
using PartyMaker.Domain.Interfaces.Services;

namespace PartyMaker.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CustomerController : ControllerBase
{
    private readonly ICustomerService _customerService;

    public CustomerController(ICustomerService customerService)
    {
        _customerService = customerService;
    }

    [HttpGet("[action]/{itemRequestId}")]
    public IActionResult ApproveRequest(Guid itemRequestId)
    {
        _customerService.ApproveRequest(itemRequestId);
        return Ok();
    }

    [HttpGet("[action]/{itemRequestId}")]
    public IActionResult CancelResult(Guid itemRequestId)
    {
        _customerService.CancelRequest(itemRequestId);
        return Ok();
    }
}