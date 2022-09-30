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
        double totalPrice = items.Select(x => x.TotalPrice).Sum();
        var itemsList = MapToItems(items);
        foreach (var item in itemsList)
        {

        }

        _orderDao.Create(customerId,itemsList, totalPrice);
    }

    public void Delete(Guid id) => _orderDao.Delete(id);

    private static List<Item> MapToItems(List<ItemDto> itemDtos)
    {
        List<Item> items = new List<Item>();
        foreach (var itemDto in itemDtos)
        {
            items.Add(new Item()
            {
                Id = Guid.NewGuid(),
                Qty = itemDto.Qty,
                Price = itemDto.Price,
                TotalPrice = itemDto.TotalPrice,
                DateCreated = itemDto.DateCreated,
                Address = new Address()
                {
                    Latitude = itemDto.AddressDto.Latitude.Value,
                    Longitude = itemDto.AddressDto.Longitude.Value,
                    Location = itemDto.AddressDto.Location
                },
                ItemStatus = itemDto.ItemStatus,
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
}