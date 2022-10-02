using System.Dynamic;
using Microsoft.AspNetCore.Mvc;
using PartyMaker.Domain.Interfaces.Dao;
using PartyMaker.Domain.Interfaces.Services;
using PartyMaker.ViewModels.Supplier;

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

    [HttpPost("[action]/{supplierId}")]
    public IActionResult AddSupplierService(Guid supplierId, SupplierServiceViewModel supplierServiceViewModel)
    {
        _suppliersService.CreateSupplierService(supplierId,
            supplierServiceViewModel.serviceId,
            supplierServiceViewModel.Description,
            supplierServiceViewModel.Image);
        return Ok();
    }

}