using Dutch2Be.Application.Common.Mappings;
using Dutch2Be.Domain.Data.Entities;

namespace Dutch2Be.Application.Words.Models
{
    public class WordDto : IMapFrom<Word>
    {
        public int Id { get; set; }

        public string Value { get; set; }

        public string Article { get; set; }
    }
}
