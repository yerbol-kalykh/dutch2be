using Dutch2Be.Domain.Data.Entities;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dutch2Be.Infrastructure.Persistence
{
    public class ApplicationDbContextSeed
    {
        public static async Task SeedWordsAsync(IServiceProvider serviceProvider, string contentRootPath)
        {
            var context = serviceProvider.GetRequiredService<ApplicationDbContext>();

            if (!context.Words.Any())
            {
                string fullPath = Path.Combine(contentRootPath, @"resources\dutch.json");

                if (File.Exists(fullPath))
                {
                    using (var reader = new StreamReader(fullPath))
                    {
                        string wordsJsonString = reader.ReadToEnd();

                        var words = JsonConvert.DeserializeObject<IEnumerable<Word>>(wordsJsonString);

                        await context.Words.AddRangeAsync(words);
                    }

                }
            }
            await context.SaveChangesAsync();
        }
    }
}
