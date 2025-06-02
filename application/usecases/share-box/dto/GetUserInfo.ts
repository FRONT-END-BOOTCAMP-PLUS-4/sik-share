export class GetUserInfo {
  constructor(
    public id: string,
    public nickname: string,
    public profileUrl: string | null,
    public shareScore: number,
  ) {}
}