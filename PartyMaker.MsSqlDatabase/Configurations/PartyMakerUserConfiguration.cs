using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PartyMaker.Domain.Entities;

namespace PartyMaker.MsSqlDatabase.Configurations;

public class PartyMakerUserConfiguration : IEntityTypeConfiguration<PartyMakerUser>
{
    public void Configure(EntityTypeBuilder<PartyMakerUser> builder)
    {
        builder
            .HasOne(a => a.Customer)
            .WithOne(b => b.User)
            .HasForeignKey<Customer>(b => b.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        builder
            .HasOne(a => a.Supplier)
            .WithOne(b => b.User)
            .HasForeignKey<Supplier>(b => b.UserId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}