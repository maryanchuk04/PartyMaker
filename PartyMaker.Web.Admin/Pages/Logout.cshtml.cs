using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using PartyMaker.Domain.Entities;

namespace PartyMaker.Web.Admin.Pages;

public class LogoutModel : PageModel
{
    private readonly SignInManager<PartyMakerUser> _signInManager;

    public LogoutModel(SignInManager<PartyMakerUser> signInManager)
    {
        _signInManager = signInManager;
    }

    public void OnGet()
    {
    }

    public async Task<IActionResult> OnPost(string returnUrl = null)
    {
        await _signInManager.SignOutAsync();

        if (returnUrl != null)
            return LocalRedirect(returnUrl);
        else
            return Page();
    }
}