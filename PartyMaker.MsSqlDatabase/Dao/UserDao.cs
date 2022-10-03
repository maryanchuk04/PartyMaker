using System.Linq;
using Microsoft.EntityFrameworkCore;
using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Interfaces.Dao;

namespace PartyMaker.MsSqlDatabase.Dao;

public class UserDao : IUserDao
{
    private readonly PartyMakerContext _context;

    public UserDao(PartyMakerContext context)
    {
        _context = context;
    }

    public void ChangeAvatar(Guid userId, string url)
    {
        var user = _context.Users
            .Include(x => x.Image)
            .FirstOrDefault(x => x.Id == userId.ToString());

        if (user == null)
        {
            return;
        }

        if (user.Image != null)
        {
            user.Image.Url = url;
        }
        else
        {
            user.Image = new Image()
            {
                Url = url
            };
        }

        _context.Users.Update(user);
        _context.SaveChanges();
    }
}