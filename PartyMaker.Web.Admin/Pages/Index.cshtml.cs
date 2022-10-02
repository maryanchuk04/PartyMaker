using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.RazorPages;
using PartyMaker.Domain.Enumerations;

namespace PartyMaker.Web.Admin.Pages;

[Authorize(Roles = UserRole.Admin)]
public class IndexModel : PageModel
{
    private readonly ILogger<IndexModel> _logger;

    public IndexModel(ILogger<IndexModel> logger)
    {
        _logger = logger;
    }
    public void OnGet()
    {

    }
}