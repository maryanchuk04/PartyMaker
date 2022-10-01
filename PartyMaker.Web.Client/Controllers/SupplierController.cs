using System.Dynamic;
using Microsoft.AspNetCore.Mvc;
using PartyMaker.Domain.Interfaces.Dao;
using PartyMaker.Domain.Interfaces.Services;

namespace PartyMaker.Controllers;
[ApiController]
[Route("api/[controller]")]
public class SupplierController : ControllerBase
{
    private readonly ISuppliersService _suppliersService;

    public SupplierController(ISuppliersService suppliersService)
    {
        _suppliersService = suppliersService;
    }

    [HttpGet("[action]/{serviceId}")]
    public IActionResult GetSuppliersByServiceId(Guid serviceId)
    {
        var suppliers = _suppliersService.GetByServiceId(serviceId);
        return Ok(suppliers);
    }
}