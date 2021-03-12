using Dutch2Be.Domain.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace Dutch2Be.Infrastructure.Persistence
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Word> Words{ get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
    }
}
