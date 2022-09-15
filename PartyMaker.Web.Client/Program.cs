using Microsoft.EntityFrameworkCore;
using PartyMaker.Application.Services;
using PartyMaker.Domain.Interfaces.Infrastructure;
using PartyMaker.Domain.Interfaces.Services;
using PartyMaker.Infrastructure.Configuration;
using PartyMaker.Infrastructure.SendGrid;
using PartyMaker.MsSqlDatabase;

var builder = WebApplication.CreateBuilder(args);

//Config Mail Client
var mailClientConfiguration = new MailClientConfiguration();
builder.Configuration.GetSection("MailClient").Bind(mailClientConfiguration);
builder.Services.AddSingleton(mailClientConfiguration);

// Add services to the container.

builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<PartyMakerContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("PartyMakerConnString"),b => b.MigrationsAssembly("PartyMaker.MsSqlDatabase")));
builder.Services.AddSingleton<IMailClient, MailClient>();
builder.Services.AddSingleton<IMailService, MailService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");
;

app.Run();