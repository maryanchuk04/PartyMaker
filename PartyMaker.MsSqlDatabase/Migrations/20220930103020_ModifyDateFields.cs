using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PartyMaker.MsSqlDatabase.Migrations
{
    public partial class ModifyDateFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UpdatedDate",
                table: "Services",
                newName: "DateUpdated");

            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "Services",
                newName: "DateCreated");

            migrationBuilder.RenameColumn(
                name: "DateTimeModified",
                table: "ItemRequests",
                newName: "DateModified");

            migrationBuilder.RenameColumn(
                name: "DateTimeCreated",
                table: "ItemRequests",
                newName: "DateCreated");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DateUpdated",
                table: "Services",
                newName: "UpdatedDate");

            migrationBuilder.RenameColumn(
                name: "DateCreated",
                table: "Services",
                newName: "CreatedDate");

            migrationBuilder.RenameColumn(
                name: "DateModified",
                table: "ItemRequests",
                newName: "DateTimeModified");

            migrationBuilder.RenameColumn(
                name: "DateCreated",
                table: "ItemRequests",
                newName: "DateTimeCreated");
        }
    }
}
