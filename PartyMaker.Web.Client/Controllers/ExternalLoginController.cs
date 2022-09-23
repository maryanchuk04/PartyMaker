﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Enumerations;
using System.Security.Claims;

namespace PartyMaker.Admin.Controllers;

public class ExternalLoginController : ControllerBase
{
    private readonly UserManager<PartyMakerUser> _userManager;
    private readonly SignInManager<PartyMakerUser> _signInManager;
    private readonly RoleManager<IdentityRole> _roleManager;

    public ExternalLoginController(UserManager<PartyMakerUser> userManager, SignInManager<PartyMakerUser> signInManager, RoleManager<IdentityRole> roleManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _roleManager = roleManager;
    }

    [HttpPost]
    public IActionResult ExternalLogin(string provider, string returnUrl = null)
    {
        var redirectUrl = Url.Action("CallbackAsync", "ExternalLogin", new { returnUrl });
        var properties = _signInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);
        return new ChallengeResult(provider, properties);
    }

    public async Task<IActionResult> CallbackAsync(string? returnUrl = null, string? remoteError = null)
    {
        if (remoteError != null)
        {
            return BadRequest(new { message = $"Error from external provider: {remoteError}" });
        }

        var info = await _signInManager.GetExternalLoginInfoAsync();

        if (info == null)
        {
            return BadRequest(new { message = "Error loading external login information." });
        }

        var signInResult = await _signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, isPersistent: false, bypassTwoFactor: true);

        if (signInResult.Succeeded)
        {
            return Ok();
        }
        
        var user = new PartyMakerUser
        { 
            UserName = info.Principal.FindFirstValue(ClaimTypes.Email).ToLower(), 
            Email = info.Principal.FindFirstValue(ClaimTypes.Email).ToLower(),
        };

        var createUserResult = await _userManager.CreateAsync(user);

        if (createUserResult.Succeeded)
        {
            var customerRole = await _roleManager.FindByNameAsync(UserRole.Customer);

            if (customerRole == null)
            { 
                await _roleManager.CreateAsync(new IdentityRole() { Name = UserRole.Customer });
            }

            await _userManager.AddToRoleAsync(await _userManager.FindByNameAsync(user.UserName), UserRole.Customer);

            await _signInManager.SignInAsync(user, isPersistent: false);
            return Ok();
        }

        return BadRequest(new { message = "Other Error" });
    }
}