using Moq;
using PartyMaker.Application.Services;
using PartyMaker.Domain.Helpers;
using PartyMaker.Domain.Interfaces.Dao;
using PartyMaker.Domain.Models;
using System;
using Xunit;

namespace PartyMaker.Tests.Services;

public class ServicesServiceTests
{
    private static readonly DateTime _now = DateTime.Parse("2022-01-01");

    public ServicesServiceTests()
    {
        TimeProvider.Provider = () => _now;
    }

    [Fact]
    public void UpsertServiceShouldCreateServiceIfItIsNew()
    {
        // Arrange
        var serviceName = "service name";
        var serviceDescription = "service description";
        var servicesDaoMock = new Mock<IServicesDao>();
        var service = new ServicesService(servicesDaoMock.Object);
        var model = new ServiceUpsertModel { Name = serviceName, Description = serviceDescription, Id = null };

        // Act
        var result = service.UpsertService(model);

        // Assert
        servicesDaoMock.Verify(r => r.Create(serviceName, serviceDescription, TimeProvider.Now));
    }

    [Fact]
    public void UpsertServiceShouldUpdateServiceIfIdExists()
    {
        // Arrange
        TimeProvider.Provider = () => _now;
        var serviceName = "service name";
        var serviceDescription = "service description";
        var serviceId = Guid.NewGuid();
        var servicesDaoMock = new Mock<IServicesDao>();
        var service = new ServicesService(servicesDaoMock.Object);
        var model = new ServiceUpsertModel { Name = serviceName, Description = serviceDescription, Id = serviceId };

        // Act
        var result = service.UpsertService(model);

        // Assert
        servicesDaoMock.Verify(r => r.Update(serviceId, serviceName, serviceDescription, TimeProvider.Now));
    }

    [Fact]
    public void GetByIdShouldRetrieveServiceFromDb()
    {
        // Arrange
        var servicesDaoMock = new Mock<IServicesDao>();
        var service = new ServicesService(servicesDaoMock.Object);
        var serviceId = Guid.NewGuid();

        // Act
        var result = service.GetById(serviceId);

        // Assert
        servicesDaoMock.Verify(r => r.GetById(serviceId));
    }

    [Fact]
    public void DeactivateShouldDeactivateServiceInDb()
    {
        // Arrange
        var servicesDaoMock = new Mock<IServicesDao>();
        var service = new ServicesService(servicesDaoMock.Object);
        var serviceId = Guid.NewGuid();

        // Act
        service.Deactivate(serviceId);

        // Assert
        servicesDaoMock.Verify(r => r.Deactivate(serviceId, TimeProvider.Now));
    }

    [Fact]
    public void ActivateShouldActivateServiceInDb()
    {
        // Arrange
        var servicesDaoMock = new Mock<IServicesDao>();
        var service = new ServicesService(servicesDaoMock.Object);
        var serviceId = Guid.NewGuid();

        // Act
        service.Activate(serviceId);

        // Assert
        servicesDaoMock.Verify(r => r.Activate(serviceId, TimeProvider.Now));
    }
}
