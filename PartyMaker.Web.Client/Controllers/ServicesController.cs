using Microsoft.AspNetCore.Mvc;
using PartyMaker.Domain.Interfaces.Services;

namespace PartyMaker.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ServicesController : ControllerBase
{
    private readonly IServicesService _servicesService;

    public ServicesController(IServicesService servicesService)
    {
        _servicesService = servicesService;
    }

    [HttpGet("[action]")]
    public IActionResult GetAllServices()
    {
        return Ok(_servicesService.GetServices());
    }
}