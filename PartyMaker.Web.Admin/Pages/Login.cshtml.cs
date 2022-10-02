using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using PartyMaker.Domain.Entities;
using PartyMaker.Web.Admin.Models.Authentication;

namespace PartyMaker.Web.Admin.Pages;

[AllowAnonymous]
public class LoginModel : PageModel
{
    private readonly UserManager<PartyMakerUser> _userManager;
    private readonly SignInManager<PartyMakerUser> _signInManager;
    private readonly RoleManager<IdentityRole> _roleManager;

    public LoginModel(UserManager<PartyMakerUser> userManager, SignInManager<PartyMakerUser> signInManager, RoleManager<IdentityRole> roleManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _roleManager = roleManager;
    }

    [BindProperty]
    public LoginData LoginData { get; set; }

    [TempData]
    public string ErrorMessage { get; set; }

    public async Task OnGetAsync()
    {
        //    var user = new PartyMakerUser { UserName = "admin@gmail.com", Email = "admin@gmail.com"};
        //    var result = await _userManager.CreateAsync(user, "admin@gmail.com");
        //    var adminRole = await _roleManager.FindByNameAsync(UserRole.Admin);

        //    if (adminRole ==null)
        //    {
        //        await _roleManager.CreateAsync(new IdentityRole() { Name = UserRole.Admin });
        //    }

        //    await _userManager.AddToRoleAsync(await _userManager.FindByNameAsync(user.UserName), UserRole.Admin);

    }
    public async Task<IActionResult> OnPostAsync()
    {
        if (ModelState.IsValid)
        {
            var email = LoginData.Email.Trim().ToLower();
            var result = await _signInManager.PasswordSignInAsync(email, LoginData.Password, true, lockoutOnFailure: true);

            if (result.Succeeded)
            {
                return RedirectToPage("Index");
            }
            else
            {
                ModelState.AddModelError(string.Empty, "Invalid login attempt");
                return Page();
            }
        }
        return Page();
    }
}