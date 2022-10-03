using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PartyMaker.MsSqlDatabase.Migrations
{
    public partial class NewFieldDescriptionForSupplier : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Suppliers",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Suppliers");
        }
    }
}
