namespace PartyMaker.Domain.Interfaces.Dao;

public interface IUserDao
{
    void ChangeAvatar(Guid userId, string url);
}