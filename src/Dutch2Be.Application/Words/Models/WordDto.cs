using Dutch2Be.Domain.Data.Enums;

namespace Dutch2Be.Application.Words.Models
{
    public class WordDto
    {
        public string Id { get; set; }

        public Article Article { get; set; }
    }
}
