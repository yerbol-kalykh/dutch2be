using Dutch2Be.Api.Filters;
using Dutch2Be.Application;
using Dutch2Be.Infrastructure;
using Dutch2Be.Infrastructure.Persistence;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Dutch2Be.Api
{
    public class Startup
    {
        private readonly string AllowSpecificOrigins = "AllowSpecificOrigins";

        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }


        public void ConfigureServices(IServiceCollection services)
        {
            services.AddApplication();

            services.AddInfrastructure(Configuration);

            services.AddDatabaseDeveloperPageExceptionFilter();

            services.AddHealthChecks().AddDbContextCheck<ApplicationDbContext>();

            services.AddCors(ConfigureCors);

            services.AddControllers(ConfigureMvcOptions);
        }

        private void ConfigureCors(CorsOptions options)
        {
            options.AddPolicy(name: AllowSpecificOrigins,   
                    builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
            );           
        }

        private void ConfigureMvcOptions(MvcOptions options)
        {
            options.Filters.Add(new ApiExceptionFilterAttribute());

            options.ReturnHttpNotAcceptable = true;
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseMigrationsEndPoint();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseHealthChecks("/health");

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(AllowSpecificOrigins);

            app.UseEndpoints(cfg =>
            {
                cfg.MapControllers();
            });
        }
    }
}
