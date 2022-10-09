using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PartyMaker.MsSqlDatabase.Migrations
{
    public partial class AddRatingToSupplierd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rating_Items_ItemId",
                table: "Rating");

            migrationBuilder.DropIndex(
                name: "IX_Rating_ItemId",
                table: "Rating");

            migrationBuilder.DropColumn(
                name: "ItemId",
                table: "Rating");

            migrationBuilder.AddColumn<Guid>(
                name: "SupplierId",
                table: "Rating",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Rating_SupplierId",
                table: "Rating",
                column: "SupplierId");

            migrationBuilder.AddForeignKey(
                name: "FK_Rating_Suppliers_SupplierId",
                table: "Rating",
                column: "SupplierId",
                principalTable: "Suppliers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rating_Suppliers_SupplierId",
                table: "Rating");

            migrationBuilder.DropIndex(
                name: "IX_Rating_SupplierId",
                table: "Rating");

            migrationBuilder.DropColumn(
                name: "SupplierId",
                table: "Rating");

            migrationBuilder.AddColumn<Guid>(
                name: "ItemId",
                table: "Rating",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Rating_ItemId",
                table: "Rating",
                column: "ItemId");

            migrationBuilder.AddForeignKey(
                name: "FK_Rating_Items_ItemId",
                table: "Rating",
                column: "ItemId",
                principalTable: "Items",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
