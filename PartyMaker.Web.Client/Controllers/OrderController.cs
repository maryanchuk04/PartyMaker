using Microsoft.AspNetCore.Mvc;
using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Enumerations;
using PartyMaker.Domain.Interfaces.Services;
using PartyMaker.Domain.Models;
using PartyMaker.ViewModels.Order;

namespace PartyMaker.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrderController : ControllerBase
{
    private readonly IOrderService _orderService;
    private readonly ICustomerService _customerService;


    public OrderController(IOrderService orderService)
    {
        _orderService = orderService;
    }

    [HttpPost("[action]")]
    public IActionResult Create(OrderViewModel orderViewModel)
    {
        if (ModelState.IsValid)
        {
            var itemDtos = new List<ItemDto>();
            foreach (var oItemViewModel in orderViewModel.Items)
            {
                itemDtos.Add(new ItemDto()
                {
                    Qty = oItemViewModel.Qty,
                    Price = oItemViewModel.Price,
                    AddressDto = new AddressDto()
                    {
                        Latitude = oItemViewModel.Address.Latitude,
                        Location = oItemViewModel.Address.Location,
                        Longitude = oItemViewModel.Address.Longitude
                    },
                    Description = oItemViewModel.Description,
                    ItemStatus = ItemStatus.New,
                    DateCreated = DateTime.Now,
                    DateExecution = oItemViewModel.DateExecution,
                    ItemRequestDtos = MapItemRequests(oItemViewModel.ItemRequests)
                });
            }
            var res = _orderService.Create(orderViewModel.CustomerId, itemDtos);
            return Ok(new
            {
                orderId = res
            });
        }
        return BadRequest();
    }

    [HttpGet("[action]/{id}")]
    public IActionResult GetOrderById(Guid id)
    {
        return Ok(_orderService.GetById(id));
    }

    [HttpGet("[action]/{orderId}")]
    public IActionResult GetCustomerByOrderId(Guid orderId)
    {
        var res = _orderService.GetCustomerByOrderId(orderId);
        var customer = new CustomerInfoViewModel()
        {
            Email = res.User.Email,
            FullName = res.User.FirstName + " " + res.User.LastName,
            Phone = res.User.Phone
        };
        return Ok(customer);
    }

    [NonAction]
    private List<ItemRequestDto> MapItemRequests(List<ItemRequestViewModel> itemRequestViewModels)
    {
        List<ItemRequestDto> itemRequests = new List<ItemRequestDto>();
        foreach (var itemReqView in itemRequestViewModels)
        {
            itemRequests.Add(new ItemRequestDto()
            {
                ServiceId = itemReqView.ServiceId,
                SupplierId = itemReqView.SupplierId
            });
        }

        return itemRequests;
    }
}