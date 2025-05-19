import type { ProfileImage } from "../entities/ProfileImage";

export interface ImageStorageRepository {
  uploadUserProfileImage(
    userPublicId: string,
    file: File,
  ): Promise<ProfileImage>;
}
