using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using PartyMaker.Domain.Interfaces.Services;
using PartyMaker.Domain.Models;
using PartyMaker.Web.Admin.Models.Services;

namespace PartyMaker.Web.Admin.Pages;

public class ServicesModel : PageModel
{
    private readonly IServicesService _servicesService;

    public ServicesModel(IServicesService servicesService)
    {
        _servicesService = servicesService;
    }
    public List<ServiceModel> Services { get; set; }

    [BindProperty]
    public ServiceUpsertModel ServiceUpsertModel { get; set; }

    public void OnGet()
    {
        Services = _servicesService.GetServices()
            .Select(s =>
            new ServiceModel{
                Id = s.Id, 
                Name = s.Name,
                Description = s.Description, 
                CreatedDate = s.DateCreated, 
                UpdatedDate = s.DateUpdated})
            .ToList(); 
    }
    public IActionResult OnPost()
    {
        _servicesService.UpsertService(ServiceUpsertModel);
        return RedirectToPage();
    }
    public IActionResult OnGetById(Guid id)
    {
        var services = _servicesService.GetById(id);
        return new JsonResult(services);
    }
    public IActionResult OnPostDeactivate(Guid serviceId)
    {
        _servicesService.Deactivate(serviceId);
        return RedirectToPage();
    }
}