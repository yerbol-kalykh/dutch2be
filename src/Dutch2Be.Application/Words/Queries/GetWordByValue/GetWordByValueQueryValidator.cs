using FluentValidation;

namespace Dutch2Be.Application.Words.Queries.GetWordByValue
{
    public class GetWordByValueQueryValidator : AbstractValidator<GetWordByValueQuery>
    {
        public GetWordByValueQueryValidator()
        {
            RuleFor(x => x.Value)
                .NotNull()
                .NotEmpty().WithMessage("Value is required.");
        }
    }
}
