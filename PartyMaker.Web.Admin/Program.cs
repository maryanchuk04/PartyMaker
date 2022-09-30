using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PartyMaker.Application.Services;
using PartyMaker.Domain.Entities;
using PartyMaker.Domain.Interfaces.Dao;
using PartyMaker.Domain.Interfaces.Infrastructure;
using PartyMaker.Domain.Interfaces.Services;
using PartyMaker.Infrastructure.Configuration;
using PartyMaker.Infrastructure.SendGrid;
using PartyMaker.MsSqlDatabase;
using PartyMaker.MsSqlDatabase.Dao;

var builder = WebApplication.CreateBuilder(args);

//Config Mail Client
var mailClientConfiguration = new MailClientConfiguration();
builder.Configuration.GetSection("MailClient").Bind(mailClientConfiguration);
builder.Services.AddSingleton(mailClientConfiguration);

// Add services to the container.
builder.Services.AddRazorPages();

builder.Services.AddDbContext<PartyMakerContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("PartyMakerConnString"),
    b => b.MigrationsAssembly("PartyMaker.MsSqlDatabase")));
builder.Services.AddScoped<IMailClient, MailClient>();
builder.Services.AddScoped<IMailService, MailService>();
builder.Services.AddScoped<IServicesService, ServicesService>();
builder.Services.AddScoped<IServicesDao, ServicesDao>();
builder.Services.AddScoped<ISuppliersService, SuppliersService>();
builder.Services.AddScoped<ISuppliersDao, SuppliersDao>();
builder.Services.AddScoped<IItemDao, ItemDao>();
builder.Services.AddScoped<IItemRequestDao, ItemRequestDao>();
builder.Services.AddScoped<ISupplierServiceDao, SupplierServiceDao>();
builder.Services.AddScoped<IItemRequestService, ItemRequestService>();
builder.Services.AddScoped<IItemService, ItemService>();




builder.Services.AddIdentity<PartyMakerUser, IdentityRole>(options =>
{
    options.Password.RequireDigit = false;
    options.Password.RequireUppercase = false;
    options.Password.RequireLowercase = false;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequiredLength = 3;
    options.Lockout.MaxFailedAccessAttempts = 20;

})
    .AddEntityFrameworkStores<PartyMakerContext>()
    .AddDefaultTokenProviders();

builder.Services.ConfigureApplicationCookie(options =>
{
    options.LoginPath = "/login";
    options.LogoutPath = "/logout";
    options.AccessDeniedPath = "/denied";
    options.ExpireTimeSpan = TimeSpan.FromDays(365);
    options.Cookie.Name = "_partymakeradmin";
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();

app.UseAuthorization();

app.MapRazorPages();

app.Run();
