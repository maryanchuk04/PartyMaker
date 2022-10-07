using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Enumerations;
using PartyMaker.Domain.Interfaces.Dao;

namespace PartyMaker.MsSqlDatabase.Dao;

public class CustomerDao : ICustomerDao
{
    private readonly PartyMakerContext _context;

    public CustomerDao(PartyMakerContext context)
    {
        _context = context;
    }

    public Guid GetCustomerIdByUserId(Guid userId)
    {
        var customer = _context.Customers.FirstOrDefault(x => x.UserId == userId.ToString());
        if (customer == null)
        {
            return Guid.Empty;
        }
        return customer.Id;
    }

    public Customer GetCustomerById(Guid id)
    {
        var customer = _context.Customers
            .Include(x => x.User)
            .ThenInclude(x => x.Image)
            .Include(x => x.Orders)
                .ThenInclude(x => x.Items)
                    .ThenInclude(x => x.ItemRequests)
                        .ThenInclude(x => x.SupplierService)
                            .ThenInclude(x => x.Service)
            .FirstOrDefault(x => x.Id == id);

        if (customer == null)
        {
            return null;
        }

        return customer;
    }

    public void ChangeInfo(Guid customerId, string email, string userName, int age, string firstName, string lastName)
    {
        var customer = _context.Customers
           .Include(x => x.User)
           .FirstOrDefault(x => x.Id == customerId);

        if (customer == null)
        {
            return;
        }

        customer.User.Email = email;
        customer.User.UserName = userName;
        customer.Age = age;
        customer.User.FirstName = firstName;
        customer.User.LastName = lastName;

        _context.Customers.Update(customer);
        _context.SaveChanges();
    }

    public List<Order> GetFilteredOrders(Guid id, OrderStatus orderStatus)
    {
        var orders = _context.Orders.Include(x => x.Customer).Include(x => x.Items).ThenInclude(x => x.ItemRequests)
                        .ThenInclude(x => x.SupplierService)
                            .ThenInclude(x => x.Service).Where(x => x.Customer.Id == id && x.OrderStatus == orderStatus);
        return orders.ToList();
    }
}