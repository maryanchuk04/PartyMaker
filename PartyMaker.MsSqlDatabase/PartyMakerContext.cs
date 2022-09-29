using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PartyMaker.Domain.Entities;

namespace PartyMaker.MsSqlDatabase;
/// To update Db use this commands
/// cd PartyMaker.MsSqlDatabase
/// dotnet-ef migrations add RemoveDuplicatedFields -s ../PartyMaker.Web.Client/
/// dotnet-ef database update -s ../PartyMaker.Web.Client/  
/// dotnet-ef  migrations remove -s ../PartyMaker.Web.Client/
/// dotnet-ef database update 20220912151020_Initial -s ../PartyMaker.Web.Client/ 

public class PartyMakerContext : IdentityDbContext<PartyMakerUser>
{
    public PartyMakerContext(DbContextOptions<PartyMakerContext> options): base(options)
    {
    }

  
    public DbSet<Customer> Customers { get; set; }
    public DbSet<Supplier> Suppliers { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<Item> Items { get; set; }
    public DbSet<ItemRequest> ItemRequests { get; set; }
    public DbSet<Address> Addresses { get; set; }
    public DbSet<ItemStatusHistory> ItemStatusHistories { get; set; }
    public DbSet<Service> Services { get; set; }
    public DbSet<SupplierService> SupplierServices { get; set; }
    public DbSet<RequestStatusHistory> RequestStatusHistories { get; set; }
    public DbSet<Image> Images { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(PartyMakerContext).Assembly);
        base.OnModelCreating(modelBuilder);
    }
}