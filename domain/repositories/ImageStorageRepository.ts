import type { ProfileImage } from "../entities/ProfileImage";

export interface ImageStorageRepository {
  uploadUserProfileImage(
    userId: string,
    file: File,
  ): Promise<ProfileImage>;
}
