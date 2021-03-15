using FluentValidation;

namespace Dutch2Be.Application.Words.Queries.GetWordById
{
    public class GetWordByIdQueryValidator : AbstractValidator<GetWordByIdQuery>
    {
        public GetWordByIdQueryValidator()
        {
            RuleFor(x => x.Id)
                .NotNull()
                .NotEmpty().WithMessage("Id is required.");
        }
    }
}
