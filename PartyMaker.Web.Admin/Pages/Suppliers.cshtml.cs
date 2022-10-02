using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Enumerations;
using PartyMaker.Domain.Interfaces.Services;
using PartyMaker.Web.Admin.Models.Suppliers;

namespace PartyMaker.Web.Admin.Pages;

[Authorize(Roles = UserRole.Admin)]
public class SuppliersModel : PageModel
{
    private readonly ISuppliersService _suppliersService;

    public SuppliersModel(ISuppliersService suppliersService)
    {
        _suppliersService = suppliersService;
    }
    public List<SupplierModel> Suppliers { get; set; }
    public SupplierModel ItemSupplier { get; set; }


    public void OnGet()
    {
        Suppliers = _suppliersService.GetSuppliers()
            .Where(sup => !sup.IsDeleted)
            .Select(sup =>
            new SupplierModel{ 
                Id = sup.Id,
                FirstName = sup.User.FirstName,
                LastName = sup.User.LastName,   
                CompanyName = sup.CompanyName,
                City = sup.City,
                Email = sup.User.Email,
                Phone = sup.User.Phone})
            .ToList();
    }

    public IActionResult OnGetSupplierServices(Guid supplierId)
    {
        var services = _suppliersService.GetSupplierServices(supplierId)
            .Select(sups =>
            new SupplierServiceModel
            {
                ImageUrl = sups.Image.Url,
                Name = sups.Service.Name,
                Description = sups.Description})
            .ToList();
        return new JsonResult(services);
    }
    public IActionResult OnPostDeactivate(Guid supplierId)
    {
        _suppliersService.Deactivate(supplierId);
        return RedirectToPage();
    }
}