import type { UserRepository } from "@/domain/repositories/UserRepository";
import type { ImageStorageRepository } from "@/domain/repositories/ImageStorageRepository";
import type { UpdateUserProfileDto } from "./dto/UpdateUserProfileDto";
import type { User } from "@/prisma/generated";

export class UpdateUserProfileUsecase {
  constructor(
    private userRepo: UserRepository,
    private imageStorageRepo: ImageStorageRepository
  ) {}

  async execute(user: UpdateUserProfileDto): Promise<Partial<User>> {
    let profileImageUrl = user.currentImageUrl;
    
    if (user.newImageFile) {
        const profileImage = await this.imageStorageRepo.uploadUserProfileImage(user.userPublicId, user.newImageFile);
        profileImageUrl = profileImage.profileUrl;
    }

    const result = await this.userRepo.update({
      publicId: Number(user.userPublicId),
      nickname: user.nickName,
      profileUrl: profileImageUrl,
    });
    
    return {
      nickname: result.nickname,
      profileUrl: result.profileUrl,
    }
  }
}
