using AutoMapper;
using Dutch2Be.Application.Common.Interfaces;
using Dutch2Be.Application.Words.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Dutch2Be.Application.Words.Queries.GetWordByValue
{
    public class GetWordByValueQuery : IRequest<WordDto>
    {
        public string Value { get; set; }
    }

    public class GetWordByValueQueryHandler : IRequestHandler<GetWordByValueQuery, WordDto>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetWordByValueQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<WordDto> Handle(GetWordByValueQuery request, CancellationToken cancellationToken)
        {
            var word = await _context.Words.FirstOrDefaultAsync(s => s.Value == request.Value, cancellationToken: cancellationToken);

            return _mapper.Map<WordDto>(word);
        }
    }
}
