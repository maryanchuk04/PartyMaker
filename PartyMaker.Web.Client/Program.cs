using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PartyMaker.Domain.Entities;
using PartyMaker.MsSqlDatabase;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<PartyMakerContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("PartyMakerConnString"),b => b.MigrationsAssembly("PartyMaker.MsSqlDatabase")));

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
    options.Cookie.Name = "_partymaker";
});


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