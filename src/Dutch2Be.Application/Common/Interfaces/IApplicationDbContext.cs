using Dutch2Be.Domain.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Dutch2Be.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<Word> Words { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
