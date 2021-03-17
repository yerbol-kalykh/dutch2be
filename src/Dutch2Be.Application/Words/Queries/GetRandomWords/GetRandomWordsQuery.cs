using AutoMapper;
using AutoMapper.QueryableExtensions;
using Dutch2Be.Application.Common.Interfaces;
using Dutch2Be.Application.Words.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Dutch2Be.Application.Words.Queries.GetRandomWords
{
    public class GetRandomWordsQuery : IRequest<IEnumerable<WordDto>>
    {
        public int NoOfWords { get; set; } = 10;
    }

    public class GetTodoItemsWithPaginationQueryHandler : IRequestHandler<GetRandomWordsQuery, IEnumerable<WordDto>>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;
        private const int MaxNoOfWords = 100;

        public GetTodoItemsWithPaginationQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<IEnumerable<WordDto>> Handle(GetRandomWordsQuery request, CancellationToken cancellationToken)
        {
            return await _context.Words
                    .AsNoTracking()
                    .ProjectTo<WordDto>(_mapper.ConfigurationProvider)
                    .OrderBy(w => Guid.NewGuid())
                    .Take(request.NoOfWords % MaxNoOfWords)
                    .ToListAsync(cancellationToken);
        }
    }
}
