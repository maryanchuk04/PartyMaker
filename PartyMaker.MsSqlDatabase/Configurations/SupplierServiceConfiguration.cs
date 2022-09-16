using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PartyMaker.Domain.Entities;

namespace PartyMaker.MsSqlDatabase.Configurations;

public class SupplierServiceConfiguration : IEntityTypeConfiguration<SupplierService>
{
    public void Configure(EntityTypeBuilder<SupplierService> builder)
    {
    }
}