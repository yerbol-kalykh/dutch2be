# Dutch2Be
Learn Dutch fast and easy? Is that even possible?


### Database Migrations

To use `dotnet-ef` for your migrations please add the following flags to your command (values assume you are executing from repository root)

* `--project src\Infrastructure` (optional if in this folder)
* `--startup-project src\Dutch2Be.Api`
* `--output-dir Persistence\Migrations`

For example, to add a new migration from the root folder:

 `dotnet ef migrations add "SampleMigration" --project src\Dutch2Be.Infrastructure --startup-project src\Dutch2Be.Api --output-dir Persistence\Migrations`