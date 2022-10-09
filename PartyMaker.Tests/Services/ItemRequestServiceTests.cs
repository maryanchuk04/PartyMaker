using Moq;
using PartyMaker.Application.Services;
using PartyMaker.Domain.Interfaces.Dao;
using System;
using Xunit;

namespace PartyMaker.Tests.Services;

public class ItemRequestServiceTests
{
    [Fact]
    public void DeleteShouldRemoveItemRequestFromDb()
    {
        // Arrange
        var itemRequestDaoMock = new Mock<IItemRequestDao>();
        var service = new ItemRequestService(itemRequestDaoMock.Object);
        var itemRequestId = Guid.NewGuid();

        // Act
        service.Delete(itemRequestId);

        // Assert
        itemRequestDaoMock.Verify(r => r.Delete(itemRequestId));
    }
}