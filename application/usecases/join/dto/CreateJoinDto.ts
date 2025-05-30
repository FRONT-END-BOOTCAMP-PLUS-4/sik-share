export class CreateJoinDto {
  constructor(
    public userId: string,
    public type: 'share' | 'groupbuy',
    public postId: number,
  ) {}
}
