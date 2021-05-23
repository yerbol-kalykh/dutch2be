using Dutch2Be.Api.Filters;
using Dutch2Be.Application;
using Dutch2Be.Common.Extensions;
using Dutch2Be.Infrastructure;
using Dutch2Be.Infrastructure.Persistence;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using Swashbuckle.AspNetCore.SwaggerUI;
using System;
using System.IO;

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

            services.AddSwaggerGen(ConfigureSwaggerGen);
        }

        private void ConfigureSwaggerGen(SwaggerGenOptions opt)
        {
            opt.SwaggerDoc("Dutch2BeApiSpecification", new OpenApiInfo
            {
                Title = "Dutch2Be API",
                Version = "V1",
                Description = "Through this API you can get article (het/de) for most popular Dutch words",
                Contact = new OpenApiContact
                {
                    Email = "yerbol.kalykh@gmail.com",
                    Name = "Yerbol Kalykhbergenov",
                    Url = new Uri("https://github.com/yerbol-kalykh")
                },
                License = new OpenApiLicense
                {
                    Name = "MIT License",
                    Url = new Uri("https://opensource.org/licenses/MIT")
                }
            });

            IncludeXmlCommentsInSwaggerGen(opt);
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

        private static void IncludeXmlCommentsInSwaggerGen(SwaggerGenOptions opt)
        {
            var assemblies = AppDomain.CurrentDomain.GetAssembliesStartWith(nameof(Dutch2Be));

            foreach (var assembly in assemblies)
            {
                var xmlCommentFile = $"{assembly.GetName().Name}.xml";
                var xmlCommentFullPath = Path.Combine(AppContext.BaseDirectory, xmlCommentFile);

                if (File.Exists(xmlCommentFullPath))
                {
                    opt.IncludeXmlComments(xmlCommentFullPath);
                }
            }
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

            app.UseSwagger();

            app.UseSwaggerUI(ConfigureSwaggerUi);

            app.UseRouting();

            app.UseCors(AllowSpecificOrigins);

            app.UseEndpoints(cfg =>
            {
                cfg.MapControllers();
            });
        }

        private void ConfigureSwaggerUi(SwaggerUIOptions opt)
        {
            opt.SwaggerEndpoint("/swagger/Dutch2BeApiSpecification/swagger.json", "Dutch2Be API");

            opt.RoutePrefix = string.Empty;
        }
    }
}