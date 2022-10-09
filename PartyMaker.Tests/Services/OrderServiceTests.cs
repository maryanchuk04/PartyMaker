using Moq;
using PartyMaker.Application.Services;
using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Enumerations;
using PartyMaker.Domain.Helpers;
using PartyMaker.Domain.Interfaces.Dao;
using PartyMaker.Domain.Models;
using System;
using System.Collections.Generic;
using Xunit;

namespace PartyMaker.Tests.Services;

public class OrderServiceTests
{
    private static readonly DateTime _now = DateTime.Parse("2022-01-01");

    public OrderServiceTests()
    {
        TimeProvider.Provider = () => _now;
    }

    [Fact]
    public void CreateShouldReturnNullIfItemsCollectionIsEmpty()
    {
        // Arrange
        var orderDaoMock = new Mock<IOrderDao>();
        var service = new OrderService(orderDaoMock.Object, null, null);
        var customerId = Guid.NewGuid();
        var items = new List<ItemDto>();

        // Act
        var orderId = service.Create(customerId, items);

        // Assert
        Assert.Null(orderId);
        orderDaoMock.Verify(r => r.Create(customerId, new List<Item>(), 0), Times.Never());
    }

    [Fact]
    public void CreateShouldCreateOrderInDb()
    {
        // Arrange
        var customerId = Guid.NewGuid();
        var serviceId1 = Guid.NewGuid();
        var supplierId1 = Guid.NewGuid();
        var supplierServiceId1 = Guid.NewGuid();
        var serviceId2 = Guid.NewGuid();
        var supplierId2 = Guid.NewGuid();
        var supplierServiceId2 = Guid.NewGuid();
        var items = GetItemsDtos(serviceId1, supplierId1, serviceId2, supplierId2);
        var orderDaoMock = new Mock<IOrderDao>();
        var supplierServiceDaoMock = new Mock<ISupplierServiceDao>();
        supplierServiceDaoMock.Setup(ssd => ssd.GetSupplierService(serviceId1, supplierId1)).Returns(new SupplierService { Id = supplierServiceId1 });
        supplierServiceDaoMock.Setup(ssd => ssd.GetSupplierService(serviceId2, supplierId2)).Returns(new SupplierService { Id = supplierServiceId2 });
        supplierServiceDaoMock.Setup(ssd => ssd.GetById(supplierServiceId1)).Returns(new SupplierService { Id = supplierServiceId1 });
        supplierServiceDaoMock.Setup(ssd => ssd.GetById(supplierServiceId2)).Returns(new SupplierService { Id = supplierServiceId2 });
        var service = new OrderService(orderDaoMock.Object, supplierServiceDaoMock.Object, null);

        // Act
        service.Create(customerId, items);

        // Assert
        orderDaoMock.Verify(r => r.Create(customerId, It.IsAny<List<Item>>(), 500));
    }

    [Fact]
    public void GetByIdShouldReturnNullIfIdIsWrong()
    {
        // Arrange
        var orderDaoMock = new Mock<IOrderDao>();
        orderDaoMock.Setup(od => od.GetOrderById(Guid.Empty)).Returns(null as Order);
        var service = new OrderService(orderDaoMock.Object, null, null);

        // Act
        var order = service.GetById(Guid.Empty);

        // Assert
        Assert.Null(order);
    }

    [Fact]
    public void GetByIdShouldReturnNullIfIdIsCorrect()
    {
        // Arrange
        var orderId = Guid.NewGuid();
        var orderDaoMock = new Mock<IOrderDao>();
        orderDaoMock.Setup(od => od.GetOrderById(orderId)).Returns(new Order { Id = orderId, Items = new List<Item>() });
        var service = new OrderService(orderDaoMock.Object, null, null);

        // Act
        var order = service.GetById(orderId);

        // Assert
        Assert.NotNull(order);
        Assert.Equal(order.Id, orderId);
    }

    private List<ItemDto> GetItemsDtos(Guid serviceId1, Guid supplierId1, Guid serviceId2, Guid supplierId2)
    {
        return new List<ItemDto>
        {
            new ItemDto
            {
                Qty = 1,
                Price = 100,
                TotalPrice = 100,
                DateCreated = TimeProvider.Now,
                ItemStatus = ItemStatus.New,
                Description = "Description",
                DateExecution = TimeProvider.Now,
                AddressDto = new AddressDto
                {
                    Latitude = 1,
                    Longitude = 1,
                    Location = "Location"
                },
                ItemRequestDtos = new List<ItemRequestDto>
                {
                    new ItemRequestDto()
                    {
                        ServiceId = serviceId1,
                        SupplierId = supplierId1,
                    },
                    new ItemRequestDto()
                    {
                        ServiceId = serviceId2,
                        SupplierId = supplierId2,
                    }
                }
            },
            new ItemDto
            {
                Qty = 2,
                Price = 200,
                TotalPrice = 400,
                DateCreated = TimeProvider.Now,
                ItemStatus = ItemStatus.New,
                Description = "Description",
                DateExecution = TimeProvider.Now,
                AddressDto = new AddressDto
                {
                    Latitude = 1,
                    Longitude = 1,
                    Location = "Location"
                },
                ItemRequestDtos = new List<ItemRequestDto>
                {
                    new ItemRequestDto()
                    {
                        ServiceId = serviceId1,
                        SupplierId = supplierId1
                    }
                }
            }
        };
    }
}