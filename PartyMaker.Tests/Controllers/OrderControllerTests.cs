using Microsoft.AspNetCore.Mvc;
using Moq;
using PartyMaker.Controllers;
using PartyMaker.Domain.Interfaces.Dao;
using PartyMaker.Domain.Interfaces.Services;
using PartyMaker.Domain.Models;
using PartyMaker.Web.Admin.Pages;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;

namespace PartyMaker.Tests.Controllers
{
    public class OrderControllerTests
    {
        [Fact]
        public void GetOrderByIdShouldReturnOrderData()
        {
            // Arrange
            var orderId = Guid.NewGuid();
            var orderServiceMock = new Mock<IOrderService>();
            orderServiceMock.Setup(os => os.GetById(orderId)).Returns(new OrderDto() { Id = orderId });
            var controller = new OrderController(orderServiceMock.Object, null);

            // Act
            var result = controller.GetOrderById(orderId);

            // Assert
            Assert.NotNull(result);
            var viewResult = Assert.IsType<OkObjectResult>(result);
            var model = Assert.IsAssignableFrom<OrderDto>(viewResult.Value);
            Assert.Equal(orderId, model.Id);
        }
    }
}
