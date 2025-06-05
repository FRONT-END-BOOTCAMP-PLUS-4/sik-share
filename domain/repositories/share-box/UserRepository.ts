interface UserShareBox {
  id: string;
  nickname: string;
  profileUrl: string | null;
  shareScore: number;
}

export interface UserRepository {
  findByPublicId(publicId: number): Promise<UserShareBox | null>;
}
