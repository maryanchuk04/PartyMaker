using System.Runtime.CompilerServices;
using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Enumerations;
using PartyMaker.Domain.Interfaces.Dao;
using PartyMaker.Domain.Interfaces.Services;
using PartyMaker.Domain.Models;

namespace PartyMaker.Application.Services;

public class OrderService : IOrderService
{
    private readonly IOrderDao _orderDao;

    public OrderService(IOrderDao orderDao)
    {
        _orderDao = orderDao;
    }

    public void  Create(Guid customerId, List<ItemDto> items)
    {
        if (items.Count == 0)
        {
            return;
        }
        items.ForEach(x=>x.TotalPrice = x.Price * x.Qty);
        double totalPrice = items.Select(x => x.TotalPrice.Value).Sum();
        var itemsList = MapToItems(items);
        foreach (var item in itemsList)
        {

        }

        _orderDao.Create(customerId,itemsList, totalPrice);
    }

    public void Delete(Guid id) => _orderDao.Delete(id);

    public OrderDto GetById(Guid id)
    {
        var order = _orderDao.GetOrderById(id);
        if (order == null)
        {
            return null;
        }

        var orderDto = new OrderDto()
        {
            Id = order.Id,
            Date = order.Date,
            OrderStatus = order.OrderStatus,
            TotalPrice = order.TotalPrice,
            Items = MapToItems(order.Items.ToList())
        };
        return orderDto;
    }

    private static List<Item> MapToItems(List<ItemDto> itemDtos)
    {
        List<Item> items = new List<Item>();
        foreach (var itemDto in itemDtos)
        {
            items.Add(new Item()
            {
                Id = Guid.NewGuid(),
                Qty = itemDto.Qty.Value,
                Price = itemDto.Price.Value,
                TotalPrice = itemDto.TotalPrice.Value,
                DateCreated = itemDto.DateCreated.Value,
                Description = itemDto.Description,
                Address = new Address()
                {
                    Latitude = itemDto.AddressDto.Latitude.Value,
                    Longitude = itemDto.AddressDto.Longitude.Value,
                    Location = itemDto.AddressDto.Location
                },
                ItemStatus = itemDto.ItemStatus.Value,
                ItemStatusHistory = new List<ItemStatusHistory>()
                {
                    new ItemStatusHistory()
                    {
                        Id = Guid.NewGuid(),
                        DateChanged = DateTime.Now,
                        ItemStatus = ItemStatus.New
                    }
                },
            });
        }

        return items;
    }

    private List<ItemDto> MapToItems(List<Item> items)
    {
        List<ItemDto> itemsDto = new List<ItemDto>();
        foreach (var item in items)
        {
            var dto = new ItemDto()
            {
                Id = item.Id,
                Qty = item.Qty,
                Price = item.Price,
                TotalPrice = item.TotalPrice,
                DateCreated = item.DateCreated,
                Description = item.Description,
                AddressDto = new AddressDto()
                {
                    Latitude = item.Address.Latitude.Value,
                    Longitude = item.Address.Longitude.Value,
                    Location = item.Address.Location
                },
                ItemStatus = item.ItemStatus
            };
            itemsDto.Add(dto);
        }

        return itemsDto;
    }
}