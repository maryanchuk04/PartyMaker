using Microsoft.EntityFrameworkCore;
using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Enumerations;
using PartyMaker.Domain.Interfaces.Dao;

namespace PartyMaker.MsSqlDatabase.Dao;

public class OrderDao : IOrderDao
{
    private readonly PartyMakerContext _context;

    public OrderDao(PartyMakerContext context)
    {
        _context = context;
    }

    public void Create(Guid customerId, List<Item> items, double totalPrice)
    {
        var customer = _context.Customers.FirstOrDefault(x => x.Id == customerId);
        if (customer == null || items.Count == 0)
        {
            return;
        }

        var order = new Order()
        {
            Id = Guid.NewGuid(),
            OrderStatus = OrderStatus.New,
            Customer = customer,
            TotalPrice = totalPrice,
            Date = DateTime.Now,
            Items = items
        };

        foreach (var item in order.Items)
        {
            item.Order = order;
        }
        _context.Orders.Add(order);
        _context.SaveChanges();
    }

    public void Delete(Guid id)
    {
        var order = _context.Orders.FirstOrDefault(x => x.Id == id);
        if (order == null)
        {
            return;
        }

        _context.Orders.Remove(order);
        _context.SaveChanges();
    }

    public Order GetOrderById(Guid id)
    {
        return _context.Orders
            .Include(x => x.Items)
                .ThenInclude(x=>x.Address)
            .Include(x=>x.Items)
                .ThenInclude(x=>x.ItemRequests)
            .FirstOrDefault(x => x.Id == id);
    }
}