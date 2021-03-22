using Dutch2Be.Application.Words.Queries.GetRandomWords;
using Dutch2Be.Application.Words.Queries.GetWordByValue;
using Dutch2Be.Domain.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Dutch2Be.Api.Controllers
{
    [Route("api/[controller]")]
    public class WordsController : ApiControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<Word>> GetRandomWords([FromQuery] int noOfWords)
        {
            var query = new GetRandomWordsQuery();

            if (noOfWords > 0) query.NoOfWords = noOfWords;

            return Ok(await Mediator.Send(query));
        }

        [HttpGet("{value}")]
        public async Task<ActionResult<Word>> GetByValue([FromRoute] string value)
        {
            return Ok(await Mediator.Send(new GetWordByValueQuery { Value = value }));
        }
    }
}
