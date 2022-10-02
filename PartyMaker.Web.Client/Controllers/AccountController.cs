using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using PartyMaker.Domain.Entities;
using System.Threading.Tasks;
using PartyMaker.Models;
using PartyMaker.Domain.Enumerations;
using Microsoft.AspNetCore.Authorization;


namespace PartyMaker.Web.Client.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AccountController : ControllerBase
{
    private readonly UserManager<PartyMakerUser> _userManager;
    private readonly SignInManager<PartyMakerUser> _signInManager;
    private readonly RoleManager<IdentityRole> _roleManager;

    public AccountController(UserManager<PartyMakerUser> userManager, SignInManager<PartyMakerUser> signInManager, RoleManager<IdentityRole> roleManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _roleManager = roleManager;
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> Register(RegistrationViewModel model)
    {
        if (ModelState.IsValid)
        {
            if(model.Role == UserRole.Supplier)
            {
               await _roleManager.CreateAsync(new IdentityRole() { Name = UserRole.Supplier });

                var supplier = new PartyMakerUser
                {
                    UserName = model.Email,
                    Email = model.Email,
                    Supplier = new Supplier
                    {
                        CompanyName = model.Email,
                    }
                };

                var res = await _userManager.CreateAsync(supplier, model.Password);

                if (res.Succeeded)
                {
                    await _signInManager.SignInAsync(supplier, isPersistent: true);
                    return Ok();
                }
                await _userManager.AddToRoleAsync(await _userManager.FindByNameAsync(supplier.UserName), UserRole.Supplier);
            }


            if(model.Role == UserRole.Customer)
            {
               await _roleManager.CreateAsync(new IdentityRole() { Name = UserRole.Customer });
            }

            var user = new PartyMakerUser
            {
                UserName = model.Email,
                Email = model.Email,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Customer = new Customer
                {
                    UserName = model.Email,
                }
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, isPersistent: true);
                return Ok();
            }
            else
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }
            }

            await _userManager.AddToRoleAsync(await _userManager.FindByNameAsync(user.UserName), UserRole.Customer);
        }
        return Ok();

    }


    [HttpPost("[action]")]
    public async Task<IActionResult> Login(LoginViewModel model)
    {
        if (ModelState.IsValid)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, true, lockoutOnFailure: true);

            if (result.Succeeded)
            {
                return Ok();
            }
        }
        return BadRequest(new
        {
            error = "Incorrect login or password"
        });
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Logout()
    {
        // Delete auth cookies
        await _signInManager.SignOutAsync();
        return Ok();
    }

}
