using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PartyMaker.Domain.Entities;

namespace PartyMaker.MsSqlDatabase.Configurations;

public class ItemRequestConfiguration : IEntityTypeConfiguration<ItemRequest>
{
    public void Configure(EntityTypeBuilder<ItemRequest> builder)
    {
        builder.HasOne(ir => ir.Item).WithMany(ir => ir.ItemRequests).IsRequired(true);
    }
}