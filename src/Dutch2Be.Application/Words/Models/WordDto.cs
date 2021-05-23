using Dutch2Be.Application.Common.Mappings;
using Dutch2Be.Domain.Data.Entities;

namespace Dutch2Be.Application.Words.Models
{
    /// <summary>
    /// A word with Id, Value and Article
    /// </summary>
    public class WordDto : IMapFrom<Word>
    {
        /// <summary>
        /// The Id of the word
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// The value of the word
        /// </summary>
        public string Value { get; set; }

        /// <summary>
        /// The article of the word
        /// </summary>
        public string Article { get; set; }
    }
}
