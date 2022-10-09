using Moq;
using PartyMaker.Application.Services;
using PartyMaker.Domain.Interfaces.Dao;
using System;
using Xunit;

namespace PartyMaker.Tests.Services;

public class ItemServiceTests
{
    [Fact]
    public void DeleteShouldRemoveItemFromDb()
    {
        // Arrange
        var itemDaoMock = new Mock<IItemDao>();
        var service = new ItemService(itemDaoMock.Object);
        var itemId = Guid.NewGuid();

        // Act
        service.Delete(itemId);

        // Assert
        itemDaoMock.Verify(r => r.Delete(itemId));
    }
}