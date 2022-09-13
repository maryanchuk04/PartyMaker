using Microsoft.EntityFrameworkCore;
using PartyMaker.Domain.Entities;

namespace PartyMaker.MsSqlDatabase;
/// To update Db use this commands
/// cd PartyMaker.MsSqlDatabase
/// dotnet-ef migrations add migration_name -s ../PartyMaker.Web.Client/
/// dotnet-ef database update -s ../PartyMaker.Web.Client/  
/// dotnet-ef  migrations remove -s ../PartyMaker.Web.Client/
public class PartyMakerContext : DbContext
{
    public PartyMakerContext(DbContextOptions<PartyMakerContext> options) : base(options)
    {

    }

    public DbSet<Customer> Customer { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(PartyMakerContext).Assembly);
        base.OnModelCreating(modelBuilder);
    }
}
