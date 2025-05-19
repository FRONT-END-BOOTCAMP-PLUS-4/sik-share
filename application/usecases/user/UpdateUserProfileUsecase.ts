import type { UserRepository } from "@/domain/repositories/UserRepository";
import type { ImageStorageRepository } from "@/domain/repositories/ImageStorageRepository";
import type { UpdateUserProfileDto } from "./dto/UpdateUserProfileDto";

export class UpdateUserProfileUsecase {
  constructor(
    private userRepo: UserRepository,
    private imageStorageRepo: ImageStorageRepository
  ) {}

  async execute(user: UpdateUserProfileDto): Promise<void> {
    let profileImageUrl = user.currentImageUrl;
    
    if (user.newImageFile) {
        const profileImage = await this.imageStorageRepo.uploadUserProfileImage(user.userId, user.newImageFile);
        profileImageUrl = profileImage.profileUrl;
        console.log(profileImageUrl);
    }

    await this.userRepo.update({
      nickname: user.nickName,
      profileUrl: profileImageUrl,
    });
  }
}
