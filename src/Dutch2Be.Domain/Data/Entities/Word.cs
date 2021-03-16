using Dutch2Be.Domain.Data.Enums;
using System.ComponentModel.DataAnnotations;

namespace Dutch2Be.Domain.Data.Entities
{
    public class Word
    {
        [Key]
        public int Id { get; set; }

        public string Value { get; set; }

        public Article Article { get; set; }
    }
}
