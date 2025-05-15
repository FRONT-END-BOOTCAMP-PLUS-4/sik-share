export class User {
  constructor(
  public id ?: string,
  public neighborhoodId ?: number,
  public publicId ?: number,
  public email ?: string,
  public nickname ?: string,
  public profileUrl ?: string | null,
  public createdAt ?: Date,          
  public shareScore ?: number,
  public address ?: string,
){}
}