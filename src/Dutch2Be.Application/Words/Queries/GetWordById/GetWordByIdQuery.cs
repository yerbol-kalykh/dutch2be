using Dutch2Be.Application.Common.Interfaces;
using Dutch2Be.Application.Common.Models;
using Dutch2Be.Application.Words.Models;
using Dutch2Be.Domain.Data.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dutch2Be.Application.Words.Queries.GetWordById
{
    public class GetWordByIdQuery : IRequest<Word>
    {
        public string Id { get; set; }
    }

    public class GetWordByIdQueryHandler : IRequestHandler<GetWordByIdQuery, Word>
    {
        private readonly IApplicationDbContext _context;
        
        public GetWordByIdQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Word> Handle(GetWordByIdQuery request, CancellationToken cancellationToken)
        {
            var word = await _context.Words.FirstOrDefaultAsync(s => s.Id == request.Id);

            return word;
        }
    }
}
