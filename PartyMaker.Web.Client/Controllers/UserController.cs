using Microsoft.AspNetCore.Mvc;
using PartyMaker.Domain.Interfaces.Services;
using PartyMaker.ViewModels.User;

namespace PartyMaker.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost("[action]/{userId}")]
    public IActionResult ChangeAvatar(Guid userId, AvatarViewModel avatarViewModel)
    {
        _userService.ChangeAvatar(userId, avatarViewModel.Url);
        return Ok();
    }
}