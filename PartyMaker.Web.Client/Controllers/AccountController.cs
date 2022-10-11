using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using PartyMaker.Domain.Entities;
using System.Threading.Tasks;
using PartyMaker.Models;
using PartyMaker.Domain.Enumerations;
using Microsoft.AspNetCore.Authorization;
using PartyMaker.Domain.Interfaces.Services;


namespace PartyMaker.Web.Client.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AccountController : ControllerBase
{
    private readonly UserManager<PartyMakerUser> _userManager;
    private readonly SignInManager<PartyMakerUser> _signInManager;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly ISuppliersService _suppliersService;
    private readonly ICustomerService _customerService;
    private readonly IMailService _mailService;

    public AccountController(UserManager<PartyMakerUser> userManager, SignInManager<PartyMakerUser> signInManager, RoleManager<IdentityRole> roleManager, ISuppliersService suppliersService, ICustomerService customerService, IMailService mailService)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _roleManager = roleManager;
        _suppliersService = suppliersService;
        _customerService = customerService;
        _mailService = mailService;
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
                    Id = Guid.NewGuid().ToString(),
                    UserName = model.Email,
                    Email = model.Email,
                    Supplier = new Supplier
                    {
                        Id = Guid.NewGuid(),
                        CompanyName = model.CompanyName ?? model.Email,
                    }
                };

                var res = await _userManager.CreateAsync(supplier, model.Password);

                if (res.Succeeded)
                {
                    await _signInManager.SignInAsync(supplier, isPersistent: true);
                    await _mailService.SendRegistrationMailAsync(model.Email);
                    return Ok(new
                    {
                        customerId = "",
                        supplierId = supplier.Supplier.Id,
                        userId = supplier.Id
                    });
                }
                await _userManager.AddToRoleAsync(await _userManager.FindByNameAsync(supplier.UserName), UserRole.Supplier);
            }


            if(model.Role == UserRole.Customer)
            {
               await _roleManager.CreateAsync(new IdentityRole() { Name = UserRole.Customer });
            }

            var user = new PartyMakerUser
            {
                Id = Guid.NewGuid().ToString(),
                UserName = model.Email,
                Email = model.Email,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Customer = new Customer
                {
                    Id = Guid.NewGuid(),
                    UserName = model.Email,
                }
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, isPersistent: true);
                await _mailService.SendRegistrationMailAsync(model.Email);
                return Ok(new
                {
                    supplierId = "",
                    customerId = user.Customer.Id,
                    userId = user.Id
                });
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
                var user = await _userManager.FindByNameAsync(model.Email);
                var customerId = _customerService.GetCustomerIdByUserId(new Guid(user.Id));
                var supplierId = _suppliersService.GetSupplierIdByUserId(new Guid(user.Id));
                return Ok(new
                {
                    userId = user.Id,
                    customerId = customerId == Guid.Empty ? "" : customerId.ToString(),
                    supplierId = supplierId == Guid.Empty ? "" : supplierId.ToString()
                });
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

    [HttpGet("[action]")]
    public async Task<IActionResult> GetUsersAuthData()
    {
        var user = await _userManager.GetUserAsync(User);
        var customerId = _customerService.GetCustomerIdByUserId(new Guid(user.Id));
        return Ok(new
        {
            customerId = customerId,
            supplierId = "",
            userId = user.Id
        });
    }

}
