using System.Dynamic;
using Microsoft.AspNetCore.Mvc;
using PartyMaker.Domain.Interfaces.Dao;

namespace PartyMaker.Controllers;
[ApiController]
[Route("api/[controller]")]
public class SupplierController : ControllerBase
{
    private readonly ISupplierDao _supplierDao;

    public SupplierController(ISupplierDao supplierDao)
    {
        _supplierDao = supplierDao;
    }

    [HttpGet("[action]/{serviceId}")]
    public IActionResult GetSuppliersByServiceId(Guid serviceId)
    {
        var suppliers = _supplierDao.GetByServiceId(serviceId);
        return Ok(suppliers);
    }
}