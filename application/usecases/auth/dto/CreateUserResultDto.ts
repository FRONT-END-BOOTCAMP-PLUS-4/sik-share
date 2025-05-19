export class CreateUserResultDto {
  constructor(
    public id: string | null,
    public nickname : string | null,
    public profileUrl: string | null,
    public neighborhood: string | null,
    public shareScore: number | null,
    public publicId: number | null
  ) {}
}
