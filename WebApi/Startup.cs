using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using BusinessLayer.Manager;
using DataAccessLayer.Repository;
using DataAccessLayer.Abstract;

namespace WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.AddSession();
            services.AddSingleton<Settings>(new Settings { ConnectionString = @"Data Source=DESKTOP-JUEFI31;Initial Catalog=Shopping;Integrated Security=True" });
            services.AddSingleton<IBasketRepository, BasketRepository>();
            services.AddSingleton<BasketManager>();
            services.AddSingleton<ICategoryRepository, CategoryRepository>();
            services.AddSingleton<CategoryManager>();
            services.AddSingleton<IProductRepository, ProductRepository>();
            services.AddSingleton<ProductManager>();
            services.AddSingleton<ICustomerRepository, CustomerRepository>();
            services.AddSingleton<CustomerManager>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            //app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSession();
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Homepage}/{action=Index}/{id?}");
            });
        }
    }
}
