namespace PartyMaker.Domain.Interfaces.Services;

public interface IUserService
{
    void ChangeAvatar(Guid userId, string imageUrl);
}