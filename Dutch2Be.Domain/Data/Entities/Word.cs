using Dutch2Be.Domain.Data.Enums;

namespace Dutch2Be.Domain.Data.Entities
{
    public class Word
    {
        public string Id { get; set; }

        public Article Article { get; set; }
    }
}
