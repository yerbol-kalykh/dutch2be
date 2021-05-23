using Dutch2Be.Application.Words.Models;
using Dutch2Be.Application.Words.Queries.GetRandomWords;
using Dutch2Be.Application.Words.Queries.GetWordByValue;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dutch2Be.Api.Controllers
{
    [Route("api/[controller]")]
    public class WordsController : ApiControllerBase
    {
        /// <summary>
        /// Get random words
        /// </summary>
        /// <param name="noOfWords"></param>
        /// <returns>List of words</returns>
        /// <response code="200">Returns list of words</response>      
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<WordDto>>> GetRandomWords([FromQuery] int noOfWords)
        {
            var query = new GetRandomWordsQuery();

            if (noOfWords > 0) query.NoOfWords = noOfWords;

            return Ok(await Mediator.Send(query));
        }

        /// <summary>
        /// Get article for word
        /// </summary>
        /// <param name="value"></param>
        /// <returns>Return word with article</returns>
        /// <response code="200">Returs word with article</response> 
        /// <response code="404">If the word not found</response>  
        [HttpGet("{value}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<WordDto>> GetByValue([FromRoute] string value)
        {
            return Ok(await Mediator.Send(new GetWordByValueQuery { Value = value }));
        }
    }
}
