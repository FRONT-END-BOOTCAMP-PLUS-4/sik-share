import type { UserRepository } from "@/domain/repositories/share-box/UserRepository";
import { GetUserInfo } from "./dto/GetUserInfo";

export class GetUserInfoUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(publicId: number): Promise<GetUserInfo> {
    const user = await this.userRepository.findByPublicId(publicId);
    if (!user) {
      throw new Error("해당 유저를 찾을 수 없습니다.");
    }
    return new GetUserInfo(
      user.id,
      user.nickname,
      user.profileUrl,
      user.shareScore
    );
  }
}
