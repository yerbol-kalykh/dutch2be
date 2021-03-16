using Dutch2Be.Application.Words.Queries.GetWordByValue;
using Dutch2Be.Domain.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Dutch2Be.Api.Controllers
{
    [Route("api/[controller]")]
    public class WordsController : ApiControllerBase
    {
        [HttpGet("{value}")]
        public async Task<ActionResult<Word>> GetByValue([FromRoute] string value)
        {
            return Ok(await Mediator.Send(new GetWordByValueQuery { Value = value }));
        }
    }
}
