using PartyMaker.Domain.Interfaces.Dao;
using PartyMaker.Domain.Interfaces.Services;

namespace PartyMaker.Application.Services;

public class UserService : IUserService
{
    private readonly IUserDao _userDao;

    public UserService(IUserDao userDao)
    {
        _userDao = userDao;
    }

    public void ChangeAvatar(Guid userId, string imageUrl)
    {
        _userDao.ChangeAvatar(userId, imageUrl);
    }
}