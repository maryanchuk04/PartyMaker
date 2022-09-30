using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace PartyMaker.Web.Admin.Areas.Authentication.Pages;

[AllowAnonymous]
public class LoginModel : PageModel
{
    [BindProperty]
    public LoginModel LoginData { get; set; }

    public string ReturnUrl { get; set; }

    [TempData]
    public string ErrorMessage { get; set; }

    public async Task OnGetAsync(string returnUrl = null)
    {
    }
}