export class CheckUserExistenceResultDto {
  constructor(
    public exists: boolean,
    public id: string | null,
    public publicId: number | null
  ) {}
}
