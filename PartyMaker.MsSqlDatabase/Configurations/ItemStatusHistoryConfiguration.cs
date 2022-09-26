using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PartyMaker.Domain.Entities;

namespace PartyMaker.MsSqlDatabase.Configurations;

internal class ItemStatusHistoryConfiguration : IEntityTypeConfiguration<ItemStatusHistory>
{
    public void Configure(EntityTypeBuilder<ItemStatusHistory> builder)
    {
    }
}