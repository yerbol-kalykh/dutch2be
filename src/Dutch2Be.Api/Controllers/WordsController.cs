using Dutch2Be.Application.Words.Queries.GetWordById;
using Dutch2Be.Domain.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Dutch2Be.Api.Controllers
{
    [Route("api/[controller]")]
    public class WordsController : ApiControllerBase
    {
        [HttpGet("{id}")]
        public async Task<ActionResult<Word>> GetById(string id)
        {
            return Ok(await Mediator.Send(new GetWordByIdQuery { Id = id }));
        }
    }
}
