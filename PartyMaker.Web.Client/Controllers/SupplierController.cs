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
            supplierServiceViewModel.ServiceId,
            supplierServiceViewModel.Description,
            supplierServiceViewModel.Image);
        return Ok();
    }

    [HttpPost("[action]/{supplierServiceId}")]
    public IActionResult EditSupplierServiceInfo(Guid supplierServiceId,
        SupplierServiceViewModel supplierServiceViewModel)
    {
        _suppliersService.ChangeSupplierServiceInfo(supplierServiceId, supplierServiceViewModel.ServiceId,
            supplierServiceViewModel.Description, supplierServiceViewModel.Image);
        return Ok();
    }

    [HttpDelete("[action]/{supplierServiceId}")]
    public IActionResult DeleteSupplierService(Guid supplierServiceId)
    {
        return Ok();
    }

    [HttpGet("[action]/{id}")]
    public IActionResult GetSupplierById(Guid id)
    {
        return Ok(_suppliersService.GetSuppliersInfoById(id));
    }

    [HttpPost("[action]/{id}")]
    public IActionResult ChangeSupplierMainInfo(Guid id, SupplierMainInfoViewModel supplierMainInfoViewModel)
    {
        _suppliersService.ChangeSupplierMainInfo(id, supplierMainInfoViewModel.CompanyName,
            supplierMainInfoViewModel.Phone, supplierMainInfoViewModel.City, supplierMainInfoViewModel.Description);
        return Ok();
    }

    [HttpPost("[action]/{supplierId}")]
    public IActionResult GetSuppliersItems(Guid supplierId, SupplierItemsViewModel supplierItemsViewModel)
    {
        var res = _suppliersService.GetSupplierItems(supplierId, supplierItemsViewModel.Status);
        return Ok(res);
    }

    [HttpPost("[action]/{itemRequestId}")]
    public IActionResult SendResponse(Guid itemRequestId, ResponseViewModel responseViewModel)
    {
        _suppliersService.SendResponse(itemRequestId, responseViewModel.Response, responseViewModel.TotalPrice);
        return Ok();
    }

    [HttpGet("[action]")]
    public IActionResult GetTopSuppliers()
    {
        return Ok(_suppliersService.GetTopSuppliers());
    }
}