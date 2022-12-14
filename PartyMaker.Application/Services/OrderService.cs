using System.ComponentModel.Design;
using System.Runtime.CompilerServices;
using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Enumerations;
using PartyMaker.Domain.Helpers;
using PartyMaker.Domain.Interfaces.Dao;
using PartyMaker.Domain.Interfaces.Services;
using PartyMaker.Domain.Models;

namespace PartyMaker.Application.Services;

public class OrderService : IOrderService
{
    private readonly IOrderDao _orderDao;
    private readonly ISupplierServiceDao _supplierServiceDao;
    private readonly IItemRequestDao _itemRequestDao;

    public OrderService(IOrderDao orderDao, ISupplierServiceDao supplierServiceDao, IItemRequestDao itemRequestDao)
    {
        _orderDao = orderDao;
        _supplierServiceDao = supplierServiceDao;
        _itemRequestDao = itemRequestDao;
    }

    public Guid? Create(Guid customerId, List<ItemDto> items)
    {
        if (items.Count == 0)
        {
            return null;
        }
        items.ForEach(x=>x.TotalPrice = x.Price * x.Qty);
        items.ForEach(x=> x.ItemRequestDtos
            .ForEach(x=>x.SupplierServiceId = _supplierServiceDao.GetSupplierService(x.ServiceId.Value, x.SupplierId.Value).Id));

        double totalPrice = items.Select(x => x.TotalPrice.Value).Sum();
        var itemsList = MapToItems(items);
        var res = _orderDao.Create(customerId,itemsList, totalPrice);
        return res;
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

    public Customer GetCustomerByOrderId(Guid orderId)
    {
        return _orderDao.GetCustomerByOrderId(orderId);
    }

    public void ReceivedItem(Guid itemRequestId)
    {
        var item = _itemRequestDao.GetItemRequestById(itemRequestId);
        if (item == null)
        {
            return;
        }

        item.RequestStatus = RequestStatus.Finished;
        item.DateModified = DateTime.Now;
        item.Item.ItemStatus = ItemStatus.Delivery;
        if (item.Item.Order.Items.All(x => x.ItemStatus == ItemStatus.Delivery))
        {
            item.Item.Order.OrderStatus = OrderStatus.Done;
        }
        item.Item.ItemStatusHistory.Add(new ItemStatusHistory()
        {
            ItemStatus = item.Item.ItemStatus,
            DateChanged = DateTime.Now,
            Item = item.Item
        });

        _itemRequestDao.UpdateItemRequest(item);
    }

    public void DeliveryItem(Guid itemRequestId)
    {
        var item = _itemRequestDao.GetItemRequestById(itemRequestId);
        if (item == null)
        {
            return;
        }

        item.Item.ItemStatus = ItemStatus.Sent;
        item.Item.ItemStatusHistory.Add(new ItemStatusHistory()
        {
            Item = item.Item,
            DateChanged = DateTime.Now
        });
        _itemRequestDao.UpdateItemRequest(item);
    }

    private List<Item> MapToItems(List<ItemDto> itemDtos)
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
                DateExecution = itemDto.DateExecution.Value,
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
                        DateChanged = TimeProvider.Now,
                        ItemStatus = ItemStatus.New
                    }
                },
                ItemRequests = this.MapItemRequests(itemDto.ItemRequestDtos)
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
                DateExecution = item.DateExecution,
                OrderId = item.Order.Id,
                AddressDto = new AddressDto()
                {
                    Latitude = item.Address.Latitude.Value,
                    Longitude = item.Address.Longitude.Value,
                    Location = item.Address.Location
                },
                ItemStatus = item.ItemStatus,
                ItemRequestDtos = MapItemRequests(item.ItemRequests.ToList())
            };
            itemsDto.Add(dto);
        }

        return itemsDto;
    }

    private List<ItemRequest> MapItemRequests(List<ItemRequestDto> itemRequestDtos)
    {
        var itemsRequests = new List<ItemRequest>();
        foreach (var itemRequest in itemRequestDtos)
        {
            itemsRequests.Add(new ItemRequest()
            {
                DateCreated = TimeProvider.Now,
                DateModified = TimeProvider.Now,
                Id = Guid.NewGuid(),
                RequestStatus = RequestStatus.Sent,
                SupplierService = _supplierServiceDao.GetById(itemRequest.SupplierServiceId.Value),
            });
        }

        return itemsRequests;
    }

    private List<ItemRequestDto> MapItemRequests(List<ItemRequest> itemRequests)
    {
        var itemsRequests = new List<ItemRequestDto>();
        foreach (var itemRequest in itemRequests)
        {
            itemsRequests.Add(new ItemRequestDto()
            {
                DateCreated = itemRequest.DateCreated,
                DateModified = itemRequest.DateModified,
                Id = itemRequest.Id,
                RequestStatus = itemRequest.RequestStatus,
                Response = itemRequest.Response,
                Price = itemRequest.Price,
                SupplierService = new SupplierServiceDto()
                {
                    Id = itemRequest.SupplierService.Id,
                    SupplierId = itemRequest.SupplierService.Supplier.Id,
                    Service = itemRequest.SupplierService.Service,
                    Description = itemRequest.SupplierService.Description,
                    SupplierCompanyName = itemRequest.SupplierService.Supplier.CompanyName,
                }
            });
        }

        return itemsRequests;
    }
}