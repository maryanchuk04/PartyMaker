using Moq;
using PartyMaker.Application.Services;
using PartyMaker.Domain.Interfaces.Dao;
using System;
using Xunit;

namespace PartyMaker.Tests.Services;

public class CustomerServiceTests
{
    [Fact]
    public void GetCustomerIdByUserIdShouldRetrieveCustomerFromDb()
    {
        // Arrange
        var customerDaoMock = new Mock<ICustomerDao>();
        var service = new CustomerService(customerDaoMock.Object, null);
        var userId = Guid.NewGuid();

        // Act
        var result = service.GetCustomerIdByUserId(userId);

        // Assert
        customerDaoMock.Verify(r => r.GetCustomerIdByUserId(userId));
    }
}