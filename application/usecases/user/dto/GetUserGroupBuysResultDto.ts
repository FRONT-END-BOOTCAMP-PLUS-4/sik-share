export class GetUserGroupBuysResultDto {
  constructor(
    public id: number,
    public thumbnailSrc: string,
    public title: string,
    public location: string,
    public meetingDate: string,
    public currentUsers: number,
    public maxUsers: number,
  ) {}
}
