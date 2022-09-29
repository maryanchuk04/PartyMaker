using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PartyMaker.Domain.Entities;

namespace PartyMaker.MsSqlDatabase.Configurations;

public class ItemConfiguration : IEntityTypeConfiguration<Item>
{
    public void Configure(EntityTypeBuilder<Item> builder)
    {
        builder
            .HasMany(item => item.ItemRequests)
            .WithOne()
            .HasForeignKey(itemRequest => itemRequest.ItemId)
            .IsRequired()
            .OnDelete(DeleteBehavior.Cascade);

        builder
            .HasOne(item => item.AcceptedItemRequest)
            .WithOne()
            .HasForeignKey<Item>(item => item.AcceptedItemRequestId)
            .IsRequired(false)
            .OnDelete(DeleteBehavior.Restrict);
    }
}