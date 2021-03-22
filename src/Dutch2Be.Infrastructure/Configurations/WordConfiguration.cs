using Dutch2Be.Domain.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Dutch2Be.Infrastructure.Configurations
{
    public class WordConfiguration : IEntityTypeConfiguration<Word>
    {
        public void Configure(EntityTypeBuilder<Word> builder)
        {
            builder.HasKey(b => b.Id)
                   .IsClustered(false);

            builder.Property(t => t.Value)
                   .IsRequired()
                   .HasMaxLength(256);

            builder.HasIndex(e => e.Value)
                   .IsUnique()
                   .IsClustered();
        }
    }
}
