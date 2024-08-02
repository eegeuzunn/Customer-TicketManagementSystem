using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class TicketTableUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "Tickets",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Cardinality",
                keyColumn: "Id",
                keyValue: 1,
                column: "Value",
                value: "Critical");

            migrationBuilder.UpdateData(
                table: "Cardinality",
                keyColumn: "Id",
                keyValue: 3,
                column: "Value",
                value: "Non-essential");

            migrationBuilder.UpdateData(
                table: "Cardinality",
                keyColumn: "Id",
                keyValue: 4,
                column: "Value",
                value: "Resolved");

            migrationBuilder.InsertData(
                table: "Cardinality",
                columns: new[] { "Id", "Value" },
                values: new object[] { 5, "Undecided" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Cardinality",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "Tickets");

            migrationBuilder.UpdateData(
                table: "Cardinality",
                keyColumn: "Id",
                keyValue: 1,
                column: "Value",
                value: "Important");

            migrationBuilder.UpdateData(
                table: "Cardinality",
                keyColumn: "Id",
                keyValue: 3,
                column: "Value",
                value: "Redundant");

            migrationBuilder.UpdateData(
                table: "Cardinality",
                keyColumn: "Id",
                keyValue: 4,
                column: "Value",
                value: "Done");
        }
    }
}
