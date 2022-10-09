using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Moq;
using PartyMaker.Domain.Entities;
using PartyMaker.Web.Admin.Models.Authentication;
using PartyMaker.Web.Admin.Pages;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace PartyMaker.Tests.Pages;

public class LoginTests
{
    [Fact]
    public async Task OnPostAsyncShouldLoginUserAndRedirectToIndexPageIfCredentialsAreCorrectAsync()
    {
        // Arrange
        var login = "admin@mail";
        var password = "admin@mail";
        var store = new Mock<IUserStore<PartyMakerUser>>();
        var userManager = new Mock<UserManager<PartyMakerUser>>(store.Object, null, null, null, null, null, null, null, null);
        var contextAccessor = new Mock<IHttpContextAccessor>();
        var claimsFactory = new Mock<IUserClaimsPrincipalFactory<PartyMakerUser>>();
        var signInManager = new Mock<SignInManager<PartyMakerUser>>(userManager.Object, contextAccessor.Object, claimsFactory.Object, null, null, null, null);
        signInManager.Setup(sm => sm.PasswordSignInAsync(login, password, true, true)).Returns(Task.FromResult(Microsoft.AspNetCore.Identity.SignInResult.Success));
        var pageModel = new LoginModel(userManager.Object, signInManager.Object, null)
        {
            LoginData = new LoginData
            {
                Email = login,
                Password = password
            }
        };

        // Act
        var result = await pageModel.OnPostAsync() as RedirectToPageResult;

        // Assert
        Assert.Equal("Index", result.PageName);
    }

    [Fact]
    public async Task OnPostAsyncShouldNotLoginUserAndRedirectToLoginPageIfCredentialsAreWrongAsync()
    {
        // Arrange
        var login = "admin@mail";
        var password = "111";
        var store = new Mock<IUserStore<PartyMakerUser>>();
        var userManager = new Mock<UserManager<PartyMakerUser>>(store.Object, null, null, null, null, null, null, null, null);
        var contextAccessor = new Mock<IHttpContextAccessor>();
        var claimsFactory = new Mock<IUserClaimsPrincipalFactory<PartyMakerUser>>();
        var signInManager = new Mock<SignInManager<PartyMakerUser>>(userManager.Object, contextAccessor.Object, claimsFactory.Object, null, null, null, null);
        signInManager.Setup(sm => sm.PasswordSignInAsync(login, password, true, true)).Returns(Task.FromResult(Microsoft.AspNetCore.Identity.SignInResult.Failed));
        var pageModel = new LoginModel(userManager.Object, signInManager.Object, null)
        {
            LoginData = new LoginData
            {
                Email = login,
                Password = password
            }
        };

        // Act
        var result = await pageModel.OnPostAsync();

        // Assert
        var errors = pageModel.ModelState.Values.SelectMany(v => v.Errors);
        Assert.Single(errors);
        Assert.Equal("Invalid login attempt", errors.First().ErrorMessage);
        Assert.NotNull(result);
    }

    [Fact]
    public async Task OnPostAsyncShouldNotLoginUserAndRedirectToLoginPageIfCredentialsAreNotFilledAsync()
    {
        // Arrange      
        var pageModel = new LoginModel(null, null, null);
        pageModel.ModelState.AddModelError("Email", "Email field is required.");
        pageModel.ModelState.AddModelError("Password", "Password field is required.");

        // Act
        var result = await pageModel.OnPostAsync();

        // Assert
        var errors = pageModel.ModelState.Values.SelectMany(v => v.Errors);
        Assert.Equal(2, errors.Count());
        Assert.NotNull(result);
    }
}
